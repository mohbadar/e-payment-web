export const meteringMenuModule = {
    title: 'Metering',
    root: true,
    alignment: 'left',
    toggle: 'click',
    translate: 'MENU.METERING.MODULE_NAME',
    page: '/metering',
    submenu: [
        {
            title: 'Quick Links',
            page: '/quick-links',
            translate: 'MENU.METERING.QUICK_LINKS',
            submenu: [
                {
                    title: 'Customer Search',
                    page: '/customer-search',
                    translate: 'MENU.METERING.CUSTOMER_SEARCH'
                },
                {
                    title: 'Meter Status',
                    page: '/meter-status',
                    translate: 'MENU.METERING.METER_STATUS'
                }
            ]
        },
        {
            title: 'Meter Reading',
            page: '/meter-reading',
            translate: 'MENU.METERING.METER_READING',
            submenu: [
                {
                    title: 'Meter Reading Entry',
                    page: '/meter-reading-entry',
                    translate: 'MENU.METERING.METER_READING_ENTRY',
                    submenu: [
                        {
                            title: 'Route Wise Meter Reading Entry',
                            page: '/route-wise',
                            translate: 'MENU.METERING.ROUT_WISE_METER_READING_ENTRY'
                        },
                        {
                            title: 'Single Manual Meter Reading Entry',
                            page: '/single-manual',
                            translate: 'MENU.METERING.SINGLE_MANUAL_METER_READING_ENTRY'
                        }
                        ,
                        {
                            title: 'Group Reading Entry',
                            page: '/group',
                            translate: 'MENU.METERING.GROUP_READING_ENTRY'
                        }

                        ,
                        {
                            title: 'Bulk Reading Entry',
                            page: '/bulk-entry',
                            translate: 'MENU.METERING.BULK_READING_ENTRY'
                        }
                        ,
                        {
                            title: 'Meter Reading Anomalies',
                            page: '/anomalies',
                            translate: 'MENU.METERING.METER_READING_ANOMALIES'
                        }
                        ,
                        {
                            title: 'Reading Modify Requests',
                            page: '/reading-modify-requests',
                            translate: 'MENU.METERING.READING_MODIFY_REQUESTS'
                        },
                        {
                            title: 'Online New Service Consumers',
                            page: '/online-new-service-consumers',
                            translate: 'MENU.METERING.ONLINE_NEW_SERVICE_CONSUMER'
                        }
                    ]
                },
                {
                    title: 'Meter Reading Sheet',
                    page: '/meter-reading-sheet',
                    translate: 'MENU.METERING.METER_READING_SHEET',

                    submenu: [
                        {
                            title: 'Bulk Reading Sheet',
                            page: '/bulk',
                            translate: 'MENU.METERING.BULK_READING_SHEET',
                        },
                        {
                            title: 'Group Reading Sheet',
                            page: '/group',
                            translate: 'MENU.METERING.GROUP_READING_SHEET',
                        },
                        {
                            title: 'Meter Reading Sheet Generation For LPU',
                            page: '/generation-for-lpu',
                            translate: 'MENU.METERING.GENERATION_FOR_LPU',
                        }
                    ]
                }, {
                    title: 'Hand Held Device',
                    page: '/hand-held-device',
                    translate: 'MENU.METERING.HAND_HELD_DEVICE',
                    submenu: [
                        {
                            title: 'Exporting To Xml File',
                            page: '/exporting-to-xml',
                            translate: 'MENU.METERING.EXPORTING_TO_XML_FILE',
                        },
                        {
                            title: 'Exproting in DB',
                            page: '/exporting-in-db',
                            translate: 'MENU.METERING.EXPORTING_IN_DB',
                        }
                    ]
                },
                {
                    title: 'Meter Routing And Scheduling',
                    page: '/meter-routing-scheduling',
                    translate: 'MENU.METERING.METER_ROUTING_AND_SCHEDULING',
                    submenu: [
                        {
                            title: 'Control Of Junctions for Sequencing',
                            page: '/junctions-control-sequencing',
                            translate: 'MENU.METERING.JUNCTIONS_SEQUENCING_CONTROL',
                        },
                        {
                            title: 'Sequencing',
                            page: '/sequencing',
                            translate: 'MENU.METERING.SEQUENCING',
                        },
                        {
                            title: 'Pole Sequencing',
                            page: '/pole-sequencing',
                            translate: 'MENU.METERING.POLE_SEQUENCING',
                        },
                        {
                            title: 'Route Code Generation',
                            page: '/route-code-generation',
                            translate: 'MENU.METERING.ROUTE_CODE_GENERATION',
                        }
                    ]
                }
            ]
        },
        {
            title: 'Meter Stock',
            page: '/meter-stock',
            translate: 'MENU.METERING.METER_STOCK',
            submenu: [
                {
                    title: 'Meter Stock Details',
                    page: '/meter-stock-details',
                    translate: 'MENU.METERING.METER_STOCK_DETAILS',

                    submenu: [
                        {
                            title: 'Meter Bulk Upload',
                            page: '/meter-bulk-upload',
                            translate: 'MENU.METERING.METER_BULK_UPLOAD',
                        },
                        {
                            title: 'Meter Approvals',
                            page: '/meter-approvals',
                            translate: 'MENU.METERING.METER_APPROVAL',
                        }
                    ]
                }
            ]
        },
        {
            title: 'Other Activites',
            page: '/other-activities',
            translate: 'MENU.METERING.OTHER_ACTIVITIES',
            submenu: [
                {
                    title: 'Meter Related Complaints',
                    page: '/meter-related-complaints',
                    translate: 'MENU.METERING.METER_RELATED_COMPLAINTS',
                },
                {
                    title: 'Job Order',
                    page: '/job-order',
                    translate: 'MENU.METERING.JOB_ORDER',
                },
                {
                    title: 'Service Order Transfer',
                    page: '/service-order-transfer',
                    translate: 'MENU.METERING.SERVICE_ORDER_TRANSFER',
                },
                {
                    title: 'JSM Service Order Transfer',
                    page: '/jsm-service-order-transfer',
                    translate: 'MENU.METERING.JSM_SERVICE_ORDER_TRANSFER',
                },
                {
                    title: 'Final Bill Request',
                    page: '/final-bill-request',
                    translate: 'MENU.METERING.FINAL_BILL_REQUEST',
                }
            ]
        },
        {
            title: 'Reports',
            page: '/reports',
            translate: 'MENU.METERING.REPORTS',
            submenu: [
                {
                    title: 'Reports List',
                    page: '/reports-list',
                    translate: 'MENU.METERING.REPORTS_LIST',
                    submenu: [
                        {
                            title: 'Meter Details Report',
                            page: '/meter-details',
                            translate: 'MENU.METERING.METER_DETAILS_REPORT',
                        },
                        {
                            title: 'Zone Date Report',
                            page: '/zone-date',
                            translate: 'MENU.METERING.ZONE_DATE_REPORT',
                        }
                        ,
                        {
                            title: 'Transformers Under Meter Reader',
                            page: '/transformers-meter-reader',
                            translate: 'MENU.METERING.TRANSFORMERS_UNDER_METER_READER',
                        }
                        ,
                        {
                            title: 'Hand Held Import Data Report',
                            page: '/hand-held-import-data',
                            translate: 'MENU.METERING.HAND_HELD_IMPORT_DATE_REPORT',
                        }
                        ,
                        {
                            title: 'Hand Held Export',
                            page: '/hand-held-export',
                            translate: 'MENU.METERING.HAND_HELD_EXPORT',
                        }
                        ,
                        {
                            title: 'Reading Log Report',
                            page: '/reading-log',
                            translate: 'MENU.METERING.READING_LOG_REPORT',
                        }
                    ]
                },
                {
                    title: 'Junction Wise Reports',
                    page: '/junction-wise',
                    translate: 'MENU.METERING.JUNCTION_WISE_REPORT',
                    submenu: [
                        {
                            title: 'Consumption Report',
                            page: '/consumption',
                            translate: 'MENU.METERING.CONSUMPTION_REPORT',
                        },
                        {
                            title: 'Anomalies Report By Cycle and Year',
                            page: '/anomaly-report',
                            translate: 'MENU.METERING.CYCLE_AND_YEAR_ANOMALIES_REPORT',
                        },
                        {
                            title: 'Readings Unentered Report by Cycle and Year',
                            page: '/readings-unentered',
                            translate: 'MENU.METERING.CYCLE_AND_YEAR_READING_UNENTERED_REPORT',
                        }
                        ,
                        {
                            title: 'Nil Consumption Report by Cycle and Year',
                            page: '/nil-consumption',
                            translate: 'MENU.METERING.CYCLE_AND_YEAR_NIL_CONSUMPTION_REPORT',
                        }
                        ,
                        {
                            title: 'Customer Wise Reading Entry Report',
                            page: '/cw-reading-entry',
                            translate: 'MENU.METERING.CW_READING_ENTRY_REPORT',
                        }
                        ,
                        {
                            title: 'Customer Wise Anomaly Approval Report',
                            page: '/cw-anomaly-approval',
                            translate: 'MENU.METERING.CW_ANOMALY_APPROVAL_REPORT',
                        },
                        {
                            title: 'Junction Wise Anomaly Report',
                            page: '/junction-wise-anomaly',
                            translate: 'MENU.METERING.JW_ANOMALY_REPORT',
                        },
                        {
                            title: 'Group Wise Anomaly Report',
                            page: '/group-wise-anomaly',
                            translate: 'MENU.METERING.GW_ANOMALY_REPORT',
                        }
                    ]
                }

            ]
        }
        ,
        {
            title: 'Mobile Approvals',
            page: '/mobile-approvals',
            translate: 'MENU.METERING.MOBILE_APPROVALS',
            submenu: [
                {
                    title: 'Meter Reader Approval',
                    page: '/meter-reader-approval',
                    translate: 'MENU.METERING.METER_READER_APPROVAL',
                },
                {
                    title: 'Readings Approval',
                    page: '/readings',
                    translate: 'MENU.METERING.READINGS_APPROVAL',
                },
                {
                    title: 'Rejected Readings',
                    page: '/rejected-readings',
                    translate: 'MENU.METERING.REJECTED_READINGS',
                },
                {
                    title: 'Reader Deactivation',
                    page: '/reader-deactivation',
                    translate: 'MENU.METERING.READER_DEACTIVATION',
                },
                {
                    title: 'RPS Anomalies',
                    page: '/rps-anomalies',
                    translate: 'MENU.METERING.RPS_ANOMALIES',
                },
                {
                    title: 'Case Book For LPU',
                    page: '/case-book-lpu',
                    translate: 'MENU.METERING.CASE_BOOK_LPU',
                },
                {
                    title: 'Case Book For Non LPU',
                    page: '/case-book-non-lpu',
                    translate: 'MENU.METERING.CASE_BOOK_NON_LPU',
                },
                {
                    title: 'Case Book For Transformer',
                    page: '/case-book-transformer',
                    translate: 'MENU.METERING.CASE_BOOK_TRANSFORMER',
                },
                {
                    title: 'MSS Approval',
                    page: '/mss-approval',
                    translate: 'MENU.METERING.MSS_APPROVAL',
                },
                {
                    title: 'Spot Billing Status Report',
                    page: '/spot-billing-status-report',
                    translate: 'MENU.METERING.SPOT_BILLING_STATUS_REPORT',
                }
            ]
        }
    ]
}