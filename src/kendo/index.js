 
export class Kendo {
  pageable = {
    refresh: true,
    pageSizes: true,
    buttonCount: 10
  };

 constructor() {
    this.datasource = {
        
          
      type: 'odata',
      transport: {
        read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
      },
       sortable: {
                mode: "multiple",
                allowUnsort: true
            },
       sortable: true,
         toolbar: ["excel"],
            excel: {
                allPages: true
            },
            filterable: {
                mode: "row"
            },
      pageSize: 15
    };
  }
}