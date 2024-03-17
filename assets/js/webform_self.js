var QueryString = function() {
    for (var e = {}, n = window.location.search.substring(1), t = n.split("&"), a = 0; a < t.length; a++) {
        var u = t[a].split("=");
        if ("undefined" == typeof e[u[0]]) e[u[0]] = decodeURIComponent(u[1]);
        else if ("string" == typeof e[u[0]]) {
            var p = [e[u[0]]];
            e[u[0]] = p
        } else e[u[0]].push(decodeURIComponent(u[1]))
    }
    return e
}(),
WEBFORM = WEBFORM || function() {
    var e = {};
    return {
        init: function(n) {
            e = n
        },
        loadForm: function() {
            console.log(e);
            var n = jQuery('form[name="' + e[0] + '"]');
            n.append('<input type="hidden" name="webformId" value="' + e[1] + '"/>');
            for(var p in window.location){
                if(typeof window.location[p] == 'string'){
                
                    //str+= p + ': ' + window.location[p]+'; </br>';
                    n.append('<input type="hidden" name="'+p+'" value=' + window.location[p] + '/>')
                    
                }
            }

            /*$.each(location, function(i, item) {
              if(typeof item == 'string') n.append('<input type="hidden" name="'+i+'" value=' + JSON.stringify(item) + '/>');
            });*/
            
            n.append('<input type="hidden" name="cookies" value="' + document.cookie + '"/>');
            
            n.append('<input type="hidden" name="form_type" value=""/>'),n.append('<input type="hidden" name="client_id" value="181"/>'), n.append('<input type="hidden" name="lp_url" value="' + window.location + '"/>'), n.append('<input type="hidden" name="utm_source" value="' + QueryString.utm_source + '"/>'), n.append('<input type="hidden" name="utm_medium"  value="' + QueryString.utm_medium + '" />'), n.append('<input type="hidden" name="utm_campaignname" value="' + QueryString.utm_campaign + '"/>'), n.append('<input type="hidden" name="utm_campaignid" value="' + QueryString.utm_campaignid + '"/>'), n.append('<input type="hidden" name="utm_adgroupname" value="' + QueryString.utm_adgroup + '"/>'), n.append('<input type="hidden" name="utm_adgroupid" value="' + QueryString.utm_adgroupid + '"/>'), n.append('<input type="hidden" name="utm_keyword" value="' + QueryString.utm_keyword + '"/>'), n.append('<input type="hidden" name="utm_website" value="' + QueryString.utm_website + '"/>'), n.append('<input type="hidden" name="utm_geo" value="' + QueryString.utm_geo + '"/>'), n.append('<input type="hidden" name="utm_adtextid" value="' + QueryString.utm_adtextid + '"/>'), n.append('<input type="hidden" name="utm_adgroupid" value="' + QueryString.utm_adgroupid + '"/>'), n.append('<input type="hidden" name="utm_bannername" value="' + QueryString.utm_bannername + '"/>'), n.append('<input type="hidden" name="utm_websitecategory" value="' + QueryString.utm_websitecategory + '"/>'), n.append('<input type="hidden" name="utm_form_source_url" value="' + QueryString.utm_form_source_url + '"/>'), n.append('<input type="hidden" name="utm_type" value="' + QueryString.utm_type + '"/>'), n.append('<input type="hidden" name="gclid" value="' + QueryString.gclid + '"/>'), "undefined" == typeof n.attr("baseurl") ? n.append('<input type="hidden" name="action_url" value="' + n.attr("action") + '"/>') : n.append('<input type="hidden" name="action_url" value="' + n.attr("baseurl") + n.attr("action") + '"/>'), n.attr("action", "http://stagingagldashboard.adv8.co/webforms/save-data"), n.attr("method", "post")
        }
    }
}();