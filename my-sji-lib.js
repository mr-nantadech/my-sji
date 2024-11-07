(function (window) {
    window.jQuery = jQuery;
    window.$ = jQuery;
})(window);
var unit = [
    "L0",
    "L1",
    "L2",
    "L3",
    "L4",
    "L5",
    "L6",
    "L7",
    "L8",
    "L9",
    "S0",
    "S1",
    "S2",
    "S3",
    "S4",
    "S5",
    "S6",
    "C1",
    "M1",
    "M2",
    "M3",
    "M4",
    "M5",
    "M6",
    "M7",
    "M8",
];
var dept = ["M9", "M10"];
var sec = ["M11", "M12"];
var div = ["M13", "M14"];
var md = ["M15", "M16"];
$.fn.sji = function () {
    var profile = this;
    return {
        getWhoApproverOf: function (empId) {
            var foundProfile = profile
                .get()
                .find(function (emp) { return emp.id === empId; });
            if (foundProfile) {
                var foundProfileNextLevel_1 = [];
                if (unit.indexOf(foundProfile.job_brand || "") !== -1) {
                    foundProfileNextLevel_1 = profile
                        .get()
                        .filter(function (emp) {
                        return emp.id !== empId &&
                            emp.div === foundProfile.div &&
                            emp.sec === foundProfile.sec &&
                            emp.dep === foundProfile.dep &&
                            !emp.uni &&
                            dept.indexOf(emp.job_brand || "") !== -1;
                    });
                    if (foundProfileNextLevel_1.length === 0) {
                        foundProfileNextLevel_1 = profile
                            .get()
                            .filter(function (emp) {
                            return emp.id !== empId &&
                                emp.div === foundProfile.div &&
                                emp.sec === foundProfile.sec &&
                                !emp.dep &&
                                !emp.uni &&
                                sec.indexOf(emp.job_brand || "") !== -1;
                        });
                    }
                    if (foundProfileNextLevel_1.length === 0) {
                        foundProfileNextLevel_1 = profile
                            .get()
                            .filter(function (emp) {
                            return emp.id !== empId &&
                                emp.div === foundProfile.div &&
                                !emp.sec &&
                                !emp.dep &&
                                !emp.uni &&
                                div.indexOf(emp.job_brand || "") !== -1;
                        });
                    }
                    if (foundProfileNextLevel_1.length === 0) {
                        foundProfileNextLevel_1 = profile
                            .get()
                            .filter(function (emp) {
                            return emp.id !== empId && md.indexOf(emp.job_brand || "") !== -1;
                        });
                    }
                }
                if (dept.indexOf(foundProfile.job_brand || "") !== -1) {
                    foundProfileNextLevel_1 = profile
                        .get()
                        .filter(function (emp) {
                        return emp.id !== empId &&
                            emp.div === foundProfile.div &&
                            emp.sec === foundProfile.sec &&
                            !emp.dep &&
                            !emp.uni &&
                            sec.indexOf(emp.job_brand || "") !== -1;
                    });
                    if (foundProfileNextLevel_1.length === 0) {
                        foundProfileNextLevel_1 = profile
                            .get()
                            .filter(function (emp) {
                            return emp.id !== empId &&
                                emp.div === foundProfile.div &&
                                !emp.sec &&
                                !emp.dep &&
                                !emp.uni &&
                                div.indexOf(emp.job_brand || "") !== -1;
                        });
                    }
                    if (foundProfileNextLevel_1.length === 0) {
                        foundProfileNextLevel_1 = profile
                            .get()
                            .filter(function (emp) {
                            return emp.id !== empId && md.indexOf(emp.job_brand || "") !== -1;
                        });
                    }
                }
                if (sec.indexOf(foundProfile.job_brand || "") !== -1) {
                    foundProfileNextLevel_1 = profile
                        .get()
                        .filter(function (emp) {
                        return emp.id !== empId &&
                            emp.div === foundProfile.div &&
                            !emp.sec &&
                            !emp.dep &&
                            !emp.uni &&
                            div.indexOf(emp.job_brand || "") !== -1;
                    });
                    if (foundProfileNextLevel_1.length === 0) {
                        foundProfileNextLevel_1 = profile
                            .get()
                            .filter(function (emp) {
                            return emp.id !== empId && md.indexOf(emp.job_brand || "") !== -1;
                        });
                    }
                }
                if (div.indexOf(foundProfile.job_brand || "") !== -1) {
                    foundProfileNextLevel_1 = profile
                        .get()
                        .filter(function (emp) {
                        return emp.id !== empId && md.indexOf(emp.job_brand || "") !== -1;
                    });
                }
                return {
                    profiles: function () {
                        return foundProfileNextLevel_1.length > 0 ? foundProfileNextLevel_1 : [];
                    },
                    basic_profiles: function () {
                        return foundProfileNextLevel_1.length > 0
                            ? foundProfileNextLevel_1.map(function (profile) { return ({
                                id: profile.id,
                                full_name_en: profile.full_name_en,
                                email_in: profile.email_in,
                                position_name: profile.pos_name_th || profile.pos_name_en,
                                div: profile.div,
                                sec: profile.sec,
                                dep: profile.dep,
                                uni: profile.uni,
                                nickname: profile.nickname,
                                job_brand: profile.job_brand,
                            }); })
                            : [];
                    },
                    email_in: function () {
                        return foundProfileNextLevel_1.map(function (emp) { return emp.email_in || ""; });
                    },
                };
            }
            return {
                profiles: function () { return []; },
                basic_profiles: function () { return []; },
                email_in: function () { return []; },
            };
        },
        getDetailsOf: function (empId) {
            var foundProfile = profile
                .get()
                .find(function (emp) { return emp.id === empId; });
            if (foundProfile) {
                return {
                    profiles: function () { return foundProfile || {}; },
                    basic_profiles: function () {
                        return foundProfile
                            ? {
                                id: foundProfile.id,
                                full_name_en: foundProfile.full_name_en,
                                email_in: foundProfile.email_in,
                                position_name: foundProfile.pos_name_th || foundProfile.pos_name_en,
                                div: foundProfile.div,
                                sec: foundProfile.sec,
                                dep: foundProfile.dep,
                                uni: foundProfile.uni,
                                nickname: foundProfile.nickname,
                                job_brand: foundProfile.job_brand,
                            }
                            : {};
                    },
                    email_in: function () { return foundProfile.email_in || ""; },
                };
            }
            return {
                profiles: function () { return ({}); },
                basic_profiles: function () { return ({}); },
                email_in: function () { return ""; },
            };
        },
    };
};
