//Base on JQuery

//find Department of Employee ID 
// sample $('employeeProfileJson').getDeptOf('15886')
$.fn.getDeptOf = function (empId) {
    const profile = this;
    const foundProfile = profile.get().find(emp => emp.id === empId);
    if (foundProfile) {
        return foundProfile.dep || null;
    }
    return null;
};