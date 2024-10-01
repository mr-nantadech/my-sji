//Base on JQuery

//find Department of Employee ID 
// sample $('employeeProfileJson').getDeptOf('15886')
$.fn.getDeptOf=function(e){const p=this,f=p.find(t=>t.id===e);return f?f.dep||null:null};