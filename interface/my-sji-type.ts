export interface IEmployeeAllData {
  id: string;
  com_id?: string;
  location_id?: string;
  location_name_th?: string;
  location_name_en?: string;
  dept_id?: string;
  dept_name_th?: string;
  dept_name_en?: string;
  dept_type_id?: string;
  dept_type_name_th?: string;
  dept_type_name_en?: string;
  dept_div_id?: string;
  dept_div_name_th?: string;
  dept_div_name_en?: string;
  dept_sec_id?: string;
  dept_sec_name_th?: string;
  dept_sec_name_en?: string;
  dept_dep_id?: string;
  dept_dep_name_th?: string;
  dept_dep_name_en?: string;
  dept_uni_id?: string;
  dept_uni_name_th?: string;
  dept_uni_name_en?: string;
  div?: string;
  sec?: string;
  dep?: string;
  uni?: string;
  package?: string;
  type_employee?: string;
  forEdit?: string;
  cost_center?: string;
  pos_id?: string;
  pos_name_th?: string;
  pos_name_en?: string;
  shift_id?: string;
  title_name_th?: string;
  first_name_th?: string;
  last_name_th?: string;
  full_name_th?: string;
  title_name_en?: string;
  first_name_en?: string;
  last_name_en?: string;
  full_name_en?: string;
  office_number?: string;
  office_number_ex?: string;
  start_date?: Date;
  start_date_str?: string;
  regular_date?: Date;
  regular_date_str?: string;
  end_date?: Date;
  end_date_str?: string;
  email_in?: string;
  email_ex?: string;
  tel?: string;
  line_id?: string;
  line_link?: string;
  biz_card?: number;
  biz_dept?: string;
  login_window?: number;
  login_name?: string;
  created_by?: string;
  created_com?: string;
  created_at?: Date;
  updated_by?: string;
  updated_com?: string;
  updated_at?: Date;
  status?: number;
  img?: string;
  nickname?: string;
  job_brand?: string | null;
  special_skill?: string | null;
  introduce_status?: number | null;
  job_brand_id?: string | null;
  job_brand_name?: string | null;
  job_brand_type?: string | null;
  job_brand_level?: number | null;
}

export interface IBasicProfile {
  id: string;
  full_name_en?: string;
  email_in?: string;
  position_name?: string;
  div?: string;
  sec?: string;
  dep?: string;
  uni?: string;
  nickname?: string;
  job_brand?: string;
}

export interface IApproverResult {
  profiles: () => IEmployeeAllData[];
  basic_profiles: () => IBasicProfile[];
  email_in: () => string[];
}

export interface IDetailsResult {
  profiles: () => IEmployeeAllData | {};
  basic_profiles: () => IBasicProfile | {};
  email_in: () => string | undefined;
}
