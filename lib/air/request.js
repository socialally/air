/**
 *  Thin wrapper for XMLHttpRequest using a 
 *  callback style.
 */
function request(opts, cb) {
  opts = opts || {};
  opts.method = opts.method || 'GET';
  opts.headers = opts.headers || {};

  var req
    , z;

  /* jshint ignore:start */
  req = new XMLHttpRequest();
  /* jshint ignore:end */

  /**
   *  Parse response headers into an object.
   */
  function parse(headers) {
    var output = {}, i, p, k, v;
    headers = headers || '';
    headers = headers.replace('\r', '');
    headers = headers.split('\n');
    for(i = 0;i < headers.length;i++) {
      p = headers[i].indexOf(':');
      k = headers[i].substr(0, p);
      v = headers[i].substr(p + 1);
      if(k && v) {
        k = k.replace(/^\s+/, '').replace(/\s+$/, '');
        v = v.replace(/^\s+/, '').replace(/\s+$/, '');
        output[k.toLowerCase()] = v;
      }
    }
    return output;
  }

  function done() {
    req.onload = null;
    req.onerror = null;
    req.ontimeout = null;
    req.onprogress = null;
    cb.apply(null, arguments); 
  }

  if(opts.fields) {
    for(z in opts.fields) {
      req[z] = opts.fields[z];
    }
  }

  opts.headers['X-Requested-With'] = 'XMLHttpRequest';

  if(opts.json) {
    opts.headers['Content-Type'] = 'application/json';
    if(opts.body !== undefined) {
      opts.body = JSON.stringify(opts.body); 
    }
  }

  var url = opts.url;

  if(opts.qs) {
    var keys = Object.keys(opts.qs)
      , qs = '?';
    keys.forEach(function(key, index) {
      if(index) {
        qs += '&'; 
      }
      qs += encodeURIComponent(key) + '=' + encodeURIComponent(opts.qs[key]); 
    })

    url += qs;
  }

  req.open(opts.method, url);

  // sadly IE10/11 does not support `json` response type
  // see: http://caniuse.com/#feat=xhr2
  if(opts.responseType) {
    req.responseType = opts.responseType; 
  }

  // apply custom request headers
  for(z in opts.headers) {
    req.setRequestHeader(z, opts.headers[z]);
  }

  if(opts.mime && typeof(req.overrideMimeType) === 'function') {
    req.overrideMimeType(opts.mime);
  }

  req.onreadystatechange = function() {
    if(this.readyState === 4) {

      var res = opts.responseType ? this.response : this.responseText
        , info = {
            headers: parse(this.getAllResponseHeaders()),
            status: this.status
          };

      info.body = res;
      if(res && opts.json && (this.status === 200 || this.status === 201)) {
        try {
          info.body = JSON.parse(this.responseText);
        }catch(e) {
          return done(
            e,
            info,
            this);
        }
      }
      done(
        null,
        info,
        this);
    }
  }

  req.onerror = opts.error || function onError(err) {
    done(err);
  }

  req.onload = opts.load;
  req.ontimeout = opts.timeout;
  req.onprogress = opts.progress;

  req.send(opts.body);
}

module.exports = function() {
  this.air.request = request;
}
