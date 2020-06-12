import gql from 'graphql-tag';

export const CreateHistoryInput = gql`
    input CreateHistoryInput {
        departmentId: Int!
        status: Int!
        onwer: String
        inventoried: DateTime
    }
`;

export const CreateAsset = gql`
    mutation createAsset($assetNr: String!, $description: String, $eqNr: String, $history: [CreateHistoryInput!], $manufacturer: Int!, $serialNumber: String) {
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
            manufacturer
            serialNumber
        }
    }
`;

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
