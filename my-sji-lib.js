//Base on JQuery

//find Department of Employee ID 
// sample $('employeeProfileJson').getDeptOf('15886')
$.fn.getDeptOf = function(id) {
    const data = this[0]; // Get the first element in the jQuery object
    if (Array.isArray(data)) {
        const found = data.find(item => item.id === id);
        return found ? found.dep || null : null;
    }
    return null;
};