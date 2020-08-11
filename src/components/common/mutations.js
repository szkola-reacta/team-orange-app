import gql from 'graphql-tag';

// Asset //
export const CreateHistoryInput = gql`
    input CreateHistoryInput {
        departmentId: Int!
        status: Int!
        onwer: String
        inventoried: DateTime
    }
`;

export const CreateAsset = gql`
    mutation createAsset($assetNr: String, $description: String, $eqNr: String, $history: [CreateHistoryInput!], $manufacturer: Int!, $serialNumber: String) {
        createAsset(assetNr: $assetNr, description: $description, eqNr: $eqNr, history: $history, manufacturer: $manufacturer, serialNumber: $serialNumber) {
            id
            assetNr
            description
            eqNr
            history {
                id
                department {
                    id
                    name
                    detailedName
                }
                inventoried
                owner
                status {
                    status
                }
            }
            manufacturer {
                manufacturer {
                    id
                }
            }
            serialNumber
        }
    }
`;

// Status //
export const CreateStatus = gql`
    mutation createStatus($status: String!) {
        createStatus(status: $status){
            id
            status
        }
    }
`;

export const EditStatus = gql`
    mutation editStatus($id: Int, $status: String!) {
        editStatus(id: $id, status: $status){
            id
            status
        }
    }
`;

export const DeleteStatus = gql`
    mutation deleteStatus($id: Int){
        deleteStatus(id:$id){
            id
        }
    }
`;

// Manufacturer //
export const CreateManufacturer = gql`
    mutation createManufacturer($name: String!){
        createManufacturer(name: $name){
            id
            name
        }
    }
`;


export const EditManufacturer = gql`
    mutation editManufacturer($id: Int!, $name: String!){
        editManufacturer(id: $id, name: $name){
            id
            name
        }
    }
`;

export const DeleteManufacturer = gql`
    mutation deleteManufacturer($id: Int!){
        deleteManufacturer(id: $id){
            id
        }
    }
`;

// Department //
export const CreateDepartment = gql`
    mutation createDepartment($name: String!, $detailedName: String){
        createDepartment(name: $name, detailedName: $detailedName){
            id
            name
            detailedName
        }
    }
`;

export const EditDepartment = gql`
    mutation editDepartment($id: Int!, $name: String, $detailedName: String){
        editDepartment(id: $id, name: $name, detailedName: $detailedName){
            id
            name
            detailedName
        }
    }
`;

export const DeleteDepartment = gql`
    mutation deleteDepartment($id: Int!){
        deleteDepartment(id: $id){
            id
        }
    }
`;