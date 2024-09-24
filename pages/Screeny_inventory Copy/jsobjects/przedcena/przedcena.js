export default {
przedcena: function () {
var podany = appsmith.store.sku_value;
var wlasciwy = wlasciwyindeks.run();
var wynikwlasciwy = wlasciwyindeks.data[0].indeks;
var ok;
if (wynikwlasciwy === podany) { ok = 'ok'; }
else    {ok = 'blad'  };
return ok;
},
	

	
}