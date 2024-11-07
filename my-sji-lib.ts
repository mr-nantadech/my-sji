import * as jQuery from "jquery";

import {
  IApproverResult,
  IDetailsResult,
  IEmployeeAllData,
} from "./interface/my-sji-type";

(function (window: any) {
  window.jQuery = jQuery;
  window.$ = jQuery;
})(window);

declare global {
  interface JQuery {
    sji(): {
      getWhoApproverOf(empId: string): IApproverResult;
      getDetailsOf(empId: string): IDetailsResult;
    };
  }
}

const unit: string[] = [
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

const dept: string[] = ["M9", "M10"];
const sec: string[] = ["M11", "M12"];
const div: string[] = ["M13", "M14"];
const md: string[] = ["M15", "M16"];

  ($ as any).fn.sji = function () {
    const profile = this;

    return {
      getWhoApproverOf: (empId: string) => {
        const foundProfile = profile
          .get()
          .find((emp: IEmployeeAllData) => emp.id === empId);

        if (foundProfile) {
          let foundProfileNextLevel: IEmployeeAllData[] = [];

          if (unit.indexOf(foundProfile.job_brand || "") !== -1) {
            foundProfileNextLevel = profile
              .get()
              .filter(
                (emp: IEmployeeAllData) =>
                  emp.id !== empId &&
                  emp.div === foundProfile.div &&
                  emp.sec === foundProfile.sec &&
                  emp.dep === foundProfile.dep &&
                  !emp.uni &&
                  dept.indexOf(emp.job_brand || "") !== -1
              );

            if (foundProfileNextLevel.length === 0) {
              foundProfileNextLevel = profile
                .get()
                .filter(
                  (emp: IEmployeeAllData) =>
                    emp.id !== empId &&
                    emp.div === foundProfile.div &&
                    emp.sec === foundProfile.sec &&
                    !emp.dep &&
                    !emp.uni &&
                    sec.indexOf(emp.job_brand || "") !== -1
                );
            }

            if (foundProfileNextLevel.length === 0) {
              foundProfileNextLevel = profile
                .get()
                .filter(
                  (emp: IEmployeeAllData) =>
                    emp.id !== empId &&
                    emp.div === foundProfile.div &&
                    !emp.sec &&
                    !emp.dep &&
                    !emp.uni &&
                    div.indexOf(emp.job_brand || "") !== -1
                );
            }

            if (foundProfileNextLevel.length === 0) {
              foundProfileNextLevel = profile
                .get()
                .filter(
                  (emp: IEmployeeAllData) =>
                    emp.id !== empId && md.indexOf(emp.job_brand || "") !== -1
                );
            }
          }

          if (dept.indexOf(foundProfile.job_brand || "") !== -1) {
            foundProfileNextLevel = profile
              .get()
              .filter(
                (emp: IEmployeeAllData) =>
                  emp.id !== empId &&
                  emp.div === foundProfile.div &&
                  emp.sec === foundProfile.sec &&
                  !emp.dep &&
                  !emp.uni &&
                  sec.indexOf(emp.job_brand || "") !== -1
              );

            if (foundProfileNextLevel.length === 0) {
              foundProfileNextLevel = profile
                .get()
                .filter(
                  (emp: IEmployeeAllData) =>
                    emp.id !== empId &&
                    emp.div === foundProfile.div &&
                    !emp.sec &&
                    !emp.dep &&
                    !emp.uni &&
                    div.indexOf(emp.job_brand || "") !== -1
                );
            }

            if (foundProfileNextLevel.length === 0) {
              foundProfileNextLevel = profile
                .get()
                .filter(
                  (emp: IEmployeeAllData) =>
                    emp.id !== empId && md.indexOf(emp.job_brand || "") !== -1
                );
            }
          }

          if (sec.indexOf(foundProfile.job_brand || "") !== -1) {
            foundProfileNextLevel = profile
              .get()
              .filter(
                (emp: IEmployeeAllData) =>
                  emp.id !== empId &&
                  emp.div === foundProfile.div &&
                  !emp.sec &&
                  !emp.dep &&
                  !emp.uni &&
                  div.indexOf(emp.job_brand || "") !== -1
              );

            if (foundProfileNextLevel.length === 0) {
              foundProfileNextLevel = profile
                .get()
                .filter(
                  (emp: IEmployeeAllData) =>
                    emp.id !== empId && md.indexOf(emp.job_brand || "") !== -1
                );
            }
          }

          if (div.indexOf(foundProfile.job_brand || "") !== -1) {
            foundProfileNextLevel = profile
              .get()
              .filter(
                (emp: IEmployeeAllData) =>
                  emp.id !== empId && md.indexOf(emp.job_brand || "") !== -1
              );
          }

          return {
            profiles: () =>
              foundProfileNextLevel.length > 0 ? foundProfileNextLevel : [],
            basic_profiles: () =>
              foundProfileNextLevel.length > 0
                ? foundProfileNextLevel.map((profile: IEmployeeAllData) => ({
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
                  }))
                : [],
            email_in: () =>
              foundProfileNextLevel.map(
                (emp: IEmployeeAllData) => emp.email_in || ""
              ),
          };
        }

        return {
          profiles: () => [],
          basic_profiles: () => [],
          email_in: () => [],
        };
      },

      getDetailsOf: (empId: string) => {
        const foundProfile = profile
          .get()
          .find((emp: IEmployeeAllData) => emp.id === empId);

        if (foundProfile) {
          return {
            profiles: () => foundProfile || {},
            basic_profiles: () =>
              foundProfile
                ? {
                    id: foundProfile.id,
                    full_name_en: foundProfile.full_name_en,
                    email_in: foundProfile.email_in,
                    position_name:
                      foundProfile.pos_name_th || foundProfile.pos_name_en,
                    div: foundProfile.div,
                    sec: foundProfile.sec,
                    dep: foundProfile.dep,
                    uni: foundProfile.uni,
                    nickname: foundProfile.nickname,
                    job_brand: foundProfile.job_brand,
                  }
                : {},
            email_in: () => foundProfile.email_in || "",
          };
        }

        return {
          profiles: () => ({}),
          basic_profiles: () => ({}),
          email_in: () => "",
        };
      },
    };
  };