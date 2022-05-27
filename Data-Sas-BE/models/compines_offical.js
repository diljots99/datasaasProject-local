"use strict";
const { Model } = require("sequelize");
const sequelizePaginate = require("sequelize-paginate");
module.exports = (sequelize, DataTypes) => {
  class CompinesOffical extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Company to officer
      //console.log("models", models);
      CompinesOffical.hasMany(models.business_watch, {
        foreignKey: "company_id",
      });
      CompinesOffical.hasMany(models.company_postcodes, {
        foreignKey: "chn",
      });
      CompinesOffical.hasMany(models.User, {
        foreignKey: "id",
      });

      // Company to Company_Emails
      // CompinesOffical.hasMany(models.company_emails, {
      //   foreignKey: "id",
      // });

      CompinesOffical.hasMany(models.company_emails, {
        foreignKey: "dbe_id",
      });

      // Company to Company_Phones
      CompinesOffical.hasMany(models.company_phones, {
        foreignKey: "id",
      });

      CompinesOffical.hasMany(models.officer, {
        foreignKey: "chn",
      });

      CompinesOffical.hasMany(models.notes, {
        foreignKey: "company_id",
      });


      CompinesOffical.hasMany(models.company_location_gen, {
        foreignKey: { name: "chn", allowNull: false },
        sourceKey: "chn",
        targetKey: "chn",
      });

      // CompinesOffical.hasMany(models.company_location_gen, {
      //   foreignKey: { name: "dbe_id", allowNull: false },
      //   sourceKey: "dbe_id",
      //   targetKey: "dbe_id",
      // });

      // Company to Company_Postcodes
      // CompinesOffical.hasMany(models.company_postcodes, {
      //   foreignKey: "id",
      // });

      // Company to Company_Websites
      // CompinesOffical.hasMany(models.company_websites, {
      //   foreignKey: "id",
      // });
    }
  }
  CompinesOffical.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
        unique: true,
      },
      dbe_id: DataTypes.INTEGER,
      company_name: DataTypes.STRING,
      company_number: DataTypes.STRING,
      regaddress_careof: DataTypes.STRING,
      regaddress_pobox: DataTypes.STRING,
      regaddress_addressline1: DataTypes.STRING,
      regaddress_addressline2: DataTypes.STRING,
      regaddress_posttown: DataTypes.STRING,
      regaddress_county: DataTypes.STRING,
      regaddress_country: DataTypes.STRING,
      regaddress_postcode: DataTypes.STRING,
      regaddress_postcode_trim: DataTypes.STRING,
      company_category: DataTypes.STRING,
      company_status: DataTypes.STRING,
      country_of_origin: DataTypes.STRING,
      dissolution_date: DataTypes.DATE,
      incorporation_date: DataTypes.DATE,
      accounts_account_ref_day: DataTypes.STRING,
      accounts_account_ref_month: DataTypes.STRING,
      accounts_next_due_date: DataTypes.STRING,
      accounts_last_made_update: DataTypes.STRING,
      accounts_account_category: DataTypes.STRING,
      returns_nextduedate: DataTypes.STRING,
      returns_lastmadeupdate: DataTypes.STRING,
      mortgages_nummortcharges: DataTypes.STRING,
      mortgages_nummortoutstanding: DataTypes.STRING,
      mortgages_nummortpartsatisfied: DataTypes.STRING,
      mortgages_nummortsatisfied: DataTypes.STRING,
      siccode_sictext_1: DataTypes.STRING,
      siccode_1: DataTypes.STRING,
      siccode_sictext_2: DataTypes.STRING,
      siccode_2: DataTypes.STRING,
      siccode_sictext_3: DataTypes.STRING,
      siccode_3: DataTypes.STRING,
      siccode_sictext_4: DataTypes.STRING,
      siccode_4: DataTypes.STRING,
      limitedpartnerships_numgenpartners: DataTypes.STRING,
      limitedpartnerships_numlimpartners: DataTypes.STRING,
      uri: DataTypes.STRING,
      previousname_1_condate: DataTypes.STRING,
      _previousname_1_companyname: DataTypes.STRING,
      _previousname_2_condate: DataTypes.STRING,
      _previousname_2_companyname: DataTypes.STRING,
      previousname_3_condate: DataTypes.STRING,
      _previousname_3_companyname: DataTypes.STRING,
      previousname_4_condate: DataTypes.STRING,
      _previousname_4_companyname: DataTypes.STRING,
      previousname_5_condate: DataTypes.STRING,
      _previousname_5_companyname: DataTypes.STRING,
      previousname_6_condate: DataTypes.STRING,
      _previousname_6_companyname: DataTypes.STRING,
      previousname_7_condate: DataTypes.STRING,
      _previousname_7_companyname: DataTypes.STRING,
      previousname_8_condate: DataTypes.STRING,
      _previousname_8_companyname: DataTypes.STRING,
      previousname_9_condate: DataTypes.STRING,
      _previousname_9_companyname: DataTypes.STRING,
      previousname_10_condate: DataTypes.STRING,
      _previousname_10_companyname: DataTypes.STRING,
      confstmtnextduedate: DataTypes.STRING,
      confstmtlastmadeupdate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "compines_offical",
    }
  );
  sequelizePaginate.paginate(CompinesOffical);
  return CompinesOffical;
};
