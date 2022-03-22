# Running Migrations
npx sequelize-cli db:migrate

# Undoing Migrations
npx sequelize-cli db:migrate:undo

# Running Seeds
npx sequelize-cli db:seed:all

# Undoing Seeds
npx sequelize-cli db:seed:undo

# User
npx sequelize-cli model:generate --name user --attributes u_id:string,u_first_name:string,u_last_name:string,u_country_code:string,u_phone_no:INTEGER,u_company_name:string,u_company_no:string,u_city:string,u_email:string,u_country:string,u_address:string,u_postal_code:INTEGER,u_email_option:string,u_password:string,u_status:boolean,u_role:INTEGER,u_last_login:DATEONLY

# plan_details
npx sequelize-cli model:generate --name plan_details --attributes p_uid:string,p_name:string,p_limit_company_monitor:INTEGER,p_limit_director_monitor:INTEGER,p_limit_company_reports:INTEGER,p_limit_director_reports:INTEGER,p_limit_credit_reports:INTEGER,p_limit_results_downloads_exports:INTEGER,p_limit_chargeable_title_reports:INTEGER,p_limit_land_registry_records:INTEGER,p_limit_corporate_land_records:INTEGER,p_level:INTEGER,p_does_it_include_feautes_earlier_levels:boolean,p_amount:string

# limits_available
npx sequelize-cli model:generate --name limits_available --attributes la_uid:string,la_limit_company_monitor_avaiable:INTEGER,la_limit_director_monitor_available:INTEGER,la_limit_company_reports_available:INTEGER,la_limit_director_reports_available:INTEGER,la_limit_credit_reports_available:INTEGER,la_limit_results_downloads_exports_available:INTEGER,la_limit_chargeable_title_reports_available:INTEGER,la_limit_land_registry_records_available:INTEGER,la_limit_corporate_land_records_available:INTEGER

# Subcription_details
npx sequelize-cli model:generate --name subcription_details --attributes sub_uid:string,u_id:string,p_id:string,sub_sr_no:string,sub_limit_details:string,sub_subscriptions_details:string,la_id:INTEGER

# plan_features
npx sequelize-cli model:generate --name plan_features --attributes pf_uid:string,p_id:INTEGER,feature_name:string

# Company
npx sequelize-cli model:generate --name company --attributes c_uid:string,dbe_id:string,company_name:string,company_number:string,regaddress_careof:string,regaddress_pobox:string,regaddress_addressline1:string,regaddress_addressline2:string,regaddress_posttown:string,regaddress_county:string,regaddress_country:string,regaddress_postcode:string,regaddress_postcode_trim:string,company_category:string,company_status:string,country_of_origin:string,dissolution_date:Date,incorporation_date:Date,accounts_account_ref_day:string,accounts_account_ref_month:string,accounts_next_due_date:Date,accounts_last_made_update:Date,accounts_account_category:string,returns_nextduedate:Date,returns_lastmadeupdate:Date,mortgages_nummortcharges:string,mortgages_nummortoutstanding:string,mortgages_nummortpartsatisfied:string,mortgages_nummortsatisfied:string,siccode_sictext_1:string,siccode_1:string,siccode_sictext_2:string,siccode_2:string,siccode_sictext_3:string,siccode_3:String,siccode_sictext_4:string,siccode_4:string,limitedpartnerships_numgenpartners:string,limitedpartnerships_numlimpartners:string,uri:string,previousname_1_condate:Date,_previousname_1_companyname:string,_previousname_2_condate:Date,_previousname_2_companyname:string,previousname_3_condate:Date,_previousname_3_companyname:string,previousname_4_condate:Date,_previousname_4_companyname:string,previousname_5_condate:Date,_previousname_5_companyname:string,previousname_6_condate:Date,_previousname_6_companyname:string,previousname_7_condate:Date,_previousname_7_companyname:string,previousname_8_condate:Date,_previousname_8_companyname:string,previousname_9_condate:Date,_previousname_9_companyname:string,previousname_10_condate:Date,_previousname_10_companyname:string,confstmtnextduedate:Date,confstmtlastmadeupdate:Date

# Officer
npx sequelize-cli model:generate --name officer --attributes f_uid:string,company_id:string,company_house_number:string,business_name:string,date_of_birth_year:string,date_of_birth_month:string,name:string,fullname:string,title:string,title2:string,firstname:string,middlename:string,lastname:string,country_of_residence:string,officer_role:string,postal_code:string,address_line_1:string,premises:string,country:string,region:string,locality:string,occupation:string,resigned_on:Date,nationality:string,appointed_on:Date

# business watch
npx sequelize-cli model:generate --name Business_Watch --attributes b_uid:string,u_id:string,c_id:string 

# Director Watch
npx sequelize-cli model:generate --name Director_Watch --attributes d_uid:string,u_id:string,o_id:string 

# Notes
npx sequelize-cli model:generate --name Notes --attributes n_uid:string,n_company_name:string,n_text:string,u_id:string

# saved_searches
npx sequelize-cli model:generate --name saved_searches --attributes s_uid:string,s_fliter_name:string,s_search_type:string,u_id:string

# saved_list
npx sequelize-cli model:generate --name saved_list --attributes sl_uid:string,sl_list_name:string,u_id:string

# saved_searches__chip_vaulues
npx sequelize-cli model:generate --name saved_searches__chip_vaulues --attributes ss_cv_uid:string,ss_cv_chip_value:string,ss_cd_id:string

# saved_searches__chip_data
npx sequelize-cli model:generate --name saved_searches__chip_data --attributes ss_cd_uid:string,ss_cd_chip_group:string,s_id:string

# saved_list_to_company
npx sequelize-cli model:generate --name saved_list_to_company --attributes sltc_uid:string,sl_id:string,c_id:string

# company_emails
npx sequelize-cli model:generate --name company_emails --attributes uid:string,company_id:string,chn:string,email:string,business_name:string,postcode_trim:string,city:string,country:string 

# company_phones
npx sequelize-cli model:generate --name company_phones --attributes uid:string,company_id:string,chn:string,email:string,business_name:string,postcode_trim:string,city:string,country:string,phone:string,company_tps:string,company_ctps:string

# company_websites
npx sequelize-cli model:generate --name company_websites --attributes uid:string,company_id:string,chn:string,website_url:string,old_website_url:string,web_from_email:string,business_name:string,postcode_trim:string,city:string,country:string,status_code:string,scraped_on:string

# company_postcodes
npx sequelize-cli model:generate --name company_postcodes --attributes uid:string,company_id:string,chn:string,business_name:string,postcode:string,postcode_trim:string,city:string,country:string,territory:string,region:string,county:string,uk_business:string

# dbp_full_contact_email
npx sequelize-cli model:generate --name dbp_full_contact_email --attributes uid:string,dbpf_id:string,full_name:string,company_id:INTEGER,chn:STRING,dbe_id:INTEGER,dbp_id:string,dbp_officers_id:string,dbp_psc_id:string,email:string

# dbp_full_contact_phone
npx sequelize-cli model:generate --name dbp_full_contact_phone --attributes uid:string,dbpf_id:string,company_id:INTEGER,chn:STRING,dbe_id:INTEGER,dbp_id:string,dbp_officers_id:string,dbp_psc_id:string,phone:string

# dbp_full_contact
npx sequelize-cli model:generate --name dbp_full_contact --attributes uid:string,dbpf_id:string,dbp_id:string,company_id:INTEGER,chn:STRING,dbe_id:INTEGER,dbp_officers_id:INTEGER,dbp_psc_id:string,chn:string,company_name:string,business_name:string,title:string,full_name:string,first_name:string,midlle_name:string,last_name:string,gender:string,job_title:string,contact_category:string,job_function:string,job_department:string,job_rank:string,job_department_detail:string,job_division:string,mailable:string,phoneable:string,languagename:string,last_validated:string,date_of_birth_year:string,date_of_birth_month:string,country_of_residence:string,officers_kind:string,psc_kin:string,country:string,address_line_1:string,premises:string,region:string,locality:string,nationality:string,officers_noted_on:string,psc_notified_on:string,officer_role:string,occupation:string,resigned_on:string,appointed_on:string,officer:string,psc:string,updated:string,linkedin_handle:string,no_recorded_mails:string,no_recoreded_phones:string,job_role_level:string,occupation_nature_of_job:string,website:string,facebook:string,twitter:string,instagram:string,

# dbp_psc_gen
npx sequelize-cli model:generate --name dbp_psc_gen --attributes uid:string,company_id:INTEGER,chn:STRING,dbe_id:INTEGER,psc_id:string,company_number:string,premises:string,adress_line_1:string,address_line_2:string,care_od:string,country:string,locality:string,postal_code:string,region:string,po_box:string,ceased_on:string,country_of_residence:string,month_of_birth:string,year_of_birth:string,etag:string,kind:string,links_self:string,country_registered:string,legal_authority:string,legal_form:string,place_registred:string,registration_number:string,name:string,name_without_line:string,title:string,forename:string,middle_name:string,surname:string,nationality:string,nature_of_control:string,notified_on:string,ceased:string,restrictions_notice_withdrawal_reason:string,linked_psc_name:string,statement:string,

# dbe_entities_gen (compaines)
npx sequelize-cli model:generate --name companies --attributes chn:STRING,dbe_id:INTEGER,website_url_1:STRING,email1:STRING,phone1:STRING,company_tps:boolean,company_ctps:boolean,business_name:STRING,company_name_short:STRING,companycategory:STRING,company_account_category:STRING,business_activity:STRING,country:STRING,uk_business:STRING,territory:STRING,region:STRING,county:STRING,city:STRING,postcode:STRING,postcode_trim:STRING,no_recorded_locations:INTEGER,no_recorded_web_urls:INTEGER,no_recorded_web_urls_live:INTEGER,no_recorded_mails:INTEGER,no_recorded_phones:INTEGER,status:STRING,company_status_detail:DATE,established_date:DATE,age_of_business:INTEGER,business_size:STRING,turnover_estimate:FLOAT,turnover_estimate_date:DATE,turnover_class_actual:STRING,turnover_class_estimate:STRING,size_estimate:INTEGER,size_estimate_date:DATE,size_class_actual:STRING,size_class_estimate:STRING,ownership_type:STRING,business_type:STRING,account_class:STRING,cycle_type:STRING,end_user_type:STRING,tangibility_type:STRING,goods_services:STRING,exporter:STRING,export_probability:STRING,importer:STRING,n_economy_sector:STRING,n_conglomerate_sector:STRING,n_industry_sector:STRING,n_activity_sector:STRING,main_sector:STRING,main_subsector:STRING,sic_section:STRING,sic_division:STRING,sic_group:STRING,sic_class:STRING,uk_sic_2007_code:STRING,sic2007_secondary:STRING,uk_sic_2003:STRING,nace_rev_2_code:STRING,nace_rev_2_secondary_code:STRING,naics_2017_code:STRING,last_accounts_date:DATE,updated:DATE,accounts__next_accounts__overdue:boolean,accounts__overdue:boolean,annual_return__overdue:boolean,branch_company_details__business_activity:TEXT,company_status_detail1:STRING,has_been_liquidated:boolean,has_charges:boolean,has_insolvency_history:boolean,is_community_interest_company:boolean,jurisdiction:STRING,registered_office_is_in_dispute:boolean,subtype:STRING,type:STRING,undeliverable_registered_office_address:boolean,last_estimated_turnover_before_dissolution:FLOAT,last_recorded_turnover_before_dissolution:FLOAT,last_estimated_size_before_dissolution:INTEGER,last_recorded_size_before_dissolution:INTEGER,company_classification:STRING,company_parliamentary_constituency_name:STRING,company_local_enterprise_partnership_lep_name:STRING,virtual_county:STRING,virtual_region:STRING,virtual_lep1:STRING,virtual_lep2:STRING,virtual_constituency:STRING,limitedpartnerships_numgenpartners:STRING,limitedpartnerships_numlimpartners:STRING
# store pro

CREATE PROCEDURE `getAllUsers`()
LANGUAGE SQL
NOT DETERMINISTIC
CONTAINS SQL
SQL SECURITY DEFINER
COMMENT ''
BEGIN
SELECT \* FROM users;
END

CREATE PROCEDURE `checkDuplicateEmailForUsers`(
IN `email` VARCHAR(50)
)
LANGUAGE SQL
NOT DETERMINISTIC
CONTAINS SQL
SQL SECURITY DEFINER
COMMENT ''
BEGIN
SELECT \* FROM users WHERE users.u_email = email;
END
