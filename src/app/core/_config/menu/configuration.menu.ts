export const configurationMenuModule = {

  title: 'Configurations',

  root: true,

  alignment: 'left',

  toggle: 'click',

  translate: 'MENU.CONFIGURATIONS.MODULE_NAME',

  page: '/configuration',

  submenu: [

    {

      title: 'Network Configuration ',

      page: '/network',

      translate: "MENU.CONFIGURATIONS.NETWORK_CONFIGURATION",

      submenu: [

        {

          title: 'Station Type',

          page: '/station-type',

          translate: "MENU.CONFIGURATIONS.STATION_TYPE"

        },

        {

          title: 'Substation Master',

          page: '/substation-master',

          translate: "MENU.CONFIGURATIONS.SUBSTATION_MASTER"

        },

        {

          title: 'Feeders Master',

          page: '/feeders-master',

          translate: "MENU.CONFIGURATIONS.FEEDERS_MASTER"

        },



        {

          title: 'Distribution Transformers Master',

          page: '/distribution-transformers-master',

          translate: "MENU.CONFIGURATIONS.DISTRIBUTION_TRANSFORMERS_MASTER"

        },

        {

          title: 'Meter Box Master',

          page: '/meter-box-master',

          translate: "MENU.CONFIGURATIONS.METER_BOX_MASTER"

        },

        {

          title: 'Meter Reader Master',

          page: '/meter-reader-master',

          translate: "MENU.CONFIGURATIONS.METER_READER_MASTER"

        },



        {

          title: 'Area Master	',

          page: '/area-master',

          translate: "MENU.CONFIGURATIONS.AREA_MASTER"

        },

        {

          title: 'Consumer Group Details',

          page: '/consumer-group-details',

          translate: "MENU.CONFIGURATIONS.CONSUMER_GROUP_DETAILS"

        },

        {

          title: 'PTR Master',

          page: '/ptr-master',

          translate: "MENU.CONFIGURATIONS.PTR_MASTER"

        },



      ]

    },

    {

      title: 'Office Configurations ',

      page: '/office',

      translate: "MENU.CONFIGURATIONS.OFFICE_CONFIGURATIONS",

      submenu: [

        {

          title: 'Office Type',

          page: '/office-type',

          translate: "MENU.CONFIGURATIONS.OFFICE_TYPE"

        },

        {

          title: 'Office Master',

          page: '/office-master',

          translate: "MENU.CONFIGURATIONS.OFFICE_MASTER"

        },

        {

          title: 'User Office Relation',

          page: '/user-office-relation',

          translate: "MENU.CONFIGURATIONS.USER_OFFICE_RELATION"

        },



        {

          title: 'Designation Master',

          page: '/designation-master',

          translate: "MENU.CONFIGURATIONS.DESIGNATION_MASTER"

        },

        {

          title: 'Field Staff Employee',

          page: '/field-staff-employee',

          translate: "MENU.CONFIGURATIONS.FIELD_STAFF_EMPLOYEE"

        },

        {

          title: 'Govt Code Master',

          page: '/govt-code-master',

          translate: "MENU.CONFIGURATIONS.GOVT_CODE_MASTER"

        },



        {

          title: 'Nature Premises	',

          page: '/nature-premises',

          translate: "MENU.CONFIGURATIONS.NATURE_PREMISES"

        },

      ]

    },

    {

      title: 'NSC Configuration ',

      page: '/nsc',

      translate: "MENU.CONFIGURATIONS.NSC_CONFIGURATION",

      submenu: [

        {

          title: 'Appliance Master',

          page: '/appliance-master',

          translate: "MENU.CONFIGURATIONS.APPLIANCE_MASTER"

        },

        {

          title: 'Units Master',

          page: '/units-master',

          translate: "MENU.CONFIGURATIONS.UNITS_MASTER"

        },

        {

          title: 'Documents Master',

          page: '/documents-master',

          translate: "MENU.CONFIGURATIONS.DOCUMENT_MASTER"

        },

        {

          title: 'Category Document Master',

          page: '/category-document-master',

          translate: "MENU.CONFIGURATIONS.CATEGORY_DOCUMENT_MASTER"

        },

        {

          title: 'Activities Master',

          page: '/activities-master',

          translate: "MENU.CONFIGURATIONS.ACTIVITIES_MASTER"

        },

        {

          title: 'Metric Master',

          page: '/metric-master',

          translate: "MENU.CONFIGURATIONS.METRIC_MASTER"

        },

        {

          title: 'Supply Voltage',

          page: '/supply-voltage',

          translate: "MENU.CONFIGURATIONS.SUPPLY_VOLTAGE"

        },



        {

          title: 'Estimate Meterial Master',

          page: '/estimate-material-master',

          translate: "MENU.CONFIGURATIONS.ESTIMATE_MATERIAL_MASTER"

        },



      ]

    },

    {

      title: 'CSC Configuration ',

      page: '/csc',

      translate: "MENU.CONFIGURATIONS.CSC_CONFIGURATION",

      submenu: [

        {

          title: 'Request Type',

          page: '/request_type',

          translate: "MENU.CONFIGURATIONS.REQUEST_TYPE"

        },

        {

          title: 'Request / Complaint',

          page: '/request_complaint',

          translate: "MENU.CONFIGURATIONS.REQUEST_COMPLAINT"

        },

        {

          title: 'Status Configuration',

          page: '/status_configuration',

          translate: "MENU.CONFIGURATIONS.STATUS_CONFIGURATION"

        },



        {

          title: 'RJ Approval Limit',

          page: '/rj_approval_limit',

          translate: "MENU.CONFIGURATIONS.RJ_APPROVAL_LIMIT"

        },

      ]

    },

    {

      title: 'Metering Configuration ',

      page: '/metering',

      translate: "MENU.CONFIGURATIONS.METERING_CONFIGURATION",

      submenu: [

        {

          title: 'Meter Capacity Master',

          page: '/meter-capacity-master',

          translate: "MENU.CONFIGURATIONS.METER_CAPACITY_MASTER"

        },

        {

          title: 'Meter Make Details',

          page: '/meter-make-detail',

          translate: "MENU.CONFIGURATIONS.METER_MAKE_DETAILS"

        },

        {

          title: 'Meter Type Configuration',

          page: '/meter-type-configuration',

          translate: "MENU.CONFIGURATIONS.METER_TYPE_CONFIGURATION"

        },



        {

          title: 'Meter Reading Holiday Details Master',

          page: '/meter-reader-holiday',

          translate: "MENU.CONFIGURATIONS.METER_READER_HOLIDAY"

        },

        {

          title: 'Meter Status Master',

          page: '/meter-status-master',

          translate: "MENU.CONFIGURATIONS.METER_STATUS_MASTER"

        },

        {

          title: 'Consumption Percentage Configuration',

          page: '/consumption-percentage-configuration',

          translate: "MENU.CONFIGURATIONS.CONSUMPTION_PERCENTAGE_CONFIGURATION"

        },

        {

          title: 'Zone Configuration	',

          page: '/zone-configuration',

          translate: "MENU.CONFIGURATIONS.ZONE_CONFIGURATION"

        },

        {

          title: 'Cycle Configuration',

          page: '/cycle-configuration',

          translate: "MENU.CONFIGURATIONS.CYCLE_CONFIGURATION"

        },

        {

          title: 'Zone Tariff Relation Configuration',

          page: '/zone-tariff-relation-configuration',

          translate: "MENU.CONFIGURATIONS.ZONE_TARIFF_RELATION_CONFIGURATION"

        },

        {

          title: 'Zone Office Relation Configuration',

          page: '/zone-office-relation-configuration',

          translate: "MENU.CONFIGURATIONS.ZONE_OFFICE_RELATION_CONFIGURATION"

        },

        {

          title: 'Zone Cycle Relation Configuration',

          page: '/zone-cycle-relation-configuration',

          translate: "MENU.CONFIGURATIONS.ZONE_CYCLE_RELATION_CONFIGURATION"

        },

        {

          title: 'Activity Master	',

          page: '/activity-master',

          translate: "MENU.CONFIGURATIONS.ACTIVITY_MASTER"

        },

        {

          title: 'Activity Relation Configuration',

          page: '/activity-relation-configuration',

          translate: "MENU.CONFIGURATIONS.ACTIVITY_RELATION_CONFIGURATION"

        },

        {

          title: 'Meter Make Serials',

          page: '/meter-make-serials',

          translate: "MENU.CONFIGURATIONS.METER_MAKE_SERIALS"

        },



      ]

    },

    {

      title: 'Billing Configuration ',

      page: '/billing',

      translate: "MENU.CONFIGURATIONS.BILLING_CONFIGURATION",

      submenu: [

        {

          title: 'Tariff Parameters',

          page: '/tariff-parameters',

          translate: "MENU.CONFIGURATIONS.TARIFF_PARAMETERS"

        },

        {

          title: 'Category Type Master',

          page: '/category-type-master',

          translate: "MENU.CONFIGURATIONS.CATEGORY_TYPE_MASTER"

        },

        {

          title: 'Category Master',

          page: '/category-master',

          translate: "MENU.CONFIGURATIONS.CATEGORY_MASTER"

        },



        {

          title: 'Tariff Charges',

          page: '/tariff-charges',

          translate: "MENU.CONFIGURATIONS.TARIFF_CHARGES"

        },

        {

          title: 'Tariff Charges Report',

          page: '/tariff-charges-report',

          translate: "MENU.CONFIGURATIONS.TARIFF_CHARGES_REPORT"

        },

        {

          title: 'Customer Group Master',

          page: '/customer-group-master',

          translate: "MENU.CONFIGURATIONS.CUSTOMER_GROUP_MASTER"

        },



        {

          title: 'Voltage Group Master	',

          page: '/voltage-group-master',

          translate: "MENU.CONFIGURATIONS.VOLTAGE_GROUP_MASTER"

        },

        {

          title: 'Behaviour Configuration',

          page: '/behaviour-configuration',

          translate: "MENU.CONFIGURATIONS.BEHAVIOUR_CONFIGURATION"

        },

        {

          title: 'Process Behaviour Link Configuration',

          page: '/process-behaviour-link-configuration',

          translate: "MENU.CONFIGURATIONS.PROCESS_BEHAVIOUR_LINK_CONFIGURATION"

        },





        {

          title: 'Process Configuration',

          page: '/process-configuration',

          translate: "MENU.CONFIGURATIONS.PROCESS_CONFIGURATION"

        },

        {

          title: 'Bill Due Date Days',

          page: '/bill-due-date-days',

          translate: "MENU.CONFIGURATIONS.BILL_DUE_DATE_DAYS"

        },



        {

          title: 'TR Losses Configuration	',

          page: '/tr-losses-configuration',

          translate: "MENU.CONFIGURATIONS.TR_LOSSES_CONFIGURATION"

        },



      ]

    },

    {

      title: 'Payment Configuration ',

      page: '/payment',

      translate: "MENU.CONFIGURATIONS.PAYMENT_CONFIGURATION",



      submenu: [

        {

          title: 'Bank Master',

          page: '/bank',

          translate: "MENU.CONFIGURATIONS.BANK_MASTER"

        },

        {

          title: 'Bank Branches ',

          page: '/branch',

          translate: "MENU.CONFIGURATIONS.BANK_BRANCH"

        },

        {

          title: 'Counter Master',

          page: '/counter-master',

          translate: "MENU.CONFIGURATIONS.COUNTER_MASTER"

        },



        {

          title: 'Counter Activition',

          page: '/counter-master/counter-activation',

          translate: "MENU.CONFIGURATIONS.COUNTER_ACTIVATION"

        },

        {

          title: 'Counter User Relation',

          page: '/counter-master/counter-user-relation',

          translate: "MENU.CONFIGURATIONS.COUNTER_USER_RELATION"

        },

        {

          title: 'Bank User Relation',

          page: '/bank/list-bank-user-relation',

          translate: "MENU.CONFIGURATIONS.BANK_USER_RELATION"

        },



        {

          title: 'Branch User Relation',

          page: '/branch/list-branch-user-relation',

          translate: "MENU.CONFIGURATIONS.LIST_BRANCH_USER_RELATION"

        },

        {

          title: 'Payment Mode Details',

          page: '/payment-mode-detail',

          translate: "MENU.CONFIGURATIONS.PAYMENT_MODE_DETAIL"

        },

        {

          title: 'Fee Penalty Configuration',

          page: '/fee-penalty-configuration',

          translate: "MENU.CONFIGURATIONS.FEE_PENALTY_CONFIGURATION"

        },





        {

          title: 'Third Party Payments Registration',

          page: '/third-party-payment',

          translate: "MENU.CONFIGURATIONS.THIRD_PARTY_PAYMENT"

        },

        {

          title: 'Installment Approval Limit',

          page: '/installment-approval-limit',

          translate: "MENU.CONFIGURATIONS.INSTALLMENT_APPROVAL_LIMIT"

        },



        {

          title: 'Posting Days Configuration',

          page: '/posting-days',

          translate: "MENU.CONFIGURATIONS.POSTING_DAYS"

        },

        {

          title: 'Extended Max Amount',

          page: '/counter-master/extended-max-amount',

          translate: "MENU.CONFIGURATIONS.EXTENDED_MAX_AMOUNT"

        },

        {

          title: 'Counter Verification',

          page: '/counter-master/counter-verification',

          translate: "MENU.CONFIGURATIONS.COUNTER_VERIFICATION"

        },





        {

          title: 'Installment Penalty',

          page: '/installment-penalty',

          translate: "MENU.CONFIGURATIONS.INSTALLMENT_PENALTY"

        },

        {

          title: 'MHawalla Configuration',

          page: '/mhawalla-configuration',

          translate: "MENU.CONFIGURATIONS.MHAWALA_CONFIGURATION"

        },

        {

          title: 'lpu Fee Configuration',

          page: '/lpu-fee-configuration',

          translate: "MENU.CONFIGURATIONS.LPU_FEE_CONFIGURATION"

        },





      ]

    },

    {

      title: 'General',

      translate: "MENU.CONFIGURATIONS.GENERAL",



      page: '',

      submenu: [

        {

          title: 'Province',

          page: '/province',

          translate: "MENU.CONFIGURATIONS.PROVINCE"



        },



        {

          title: 'e-Signature',

          page: '/e-signature',

          translate: "MENU.CONFIGURATIONS.ESIGNATURE"

        }

        ,

        {

          title: 'User Management',

          page: '/user-management',

          translate: "MENU.CONFIGURATIONS.USER_MANAGEMENT"

        }

      ]

    },

    {

      title: 'Mobile Metering',

      page: '/mobile-metering',
    }

  ]

}