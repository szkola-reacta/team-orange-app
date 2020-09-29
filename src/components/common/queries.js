import gql from 'graphql-tag';


export const AssetsQuery = gql`
    query asset($search: String, $id: Int){
        asset(search:$search, id:$id){
            id
            assetNr
            eqNr
            serialNumber
            manufacturer{
                id
                name
            }
            description
            historySet {
                id
                status {
                  status
                }
                department {
                  id
                  name
                  detailedName
                }
                owner
                inventoried
                entryDate
              }
                  }
              }
`;

export const ManufacturerQuery = gql`
    query manufacturer($search: String, $id: Int){
        manufacturer(search:$search, id:$id){
            id
            name
        }
    }
`;

export const StatusQuery = gql`
    query status($search: String, $id: Int){
        status(search:$search, id:$id){
            id
            status
        }
    }
`;

export const DepartmentQuery = gql `
    query department($search: String, $id: Int){
        department(search:$search, id:$id){
            id
            name
            detailedName
        }
    }
`;

export const HistoryQuery = gql `
    query history($search: String, $id: Int){
        history(search:$search, id:$id){
            asset{
                id
                assetNr
            }
            department {
                id
                name
                detailedName
            }
            status {
                status
            }
        }
    }
`;