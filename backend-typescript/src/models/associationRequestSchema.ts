import mongoose from 'mongoose'
import { Schema, Types } from 'mongoose'
interface IAssociationRequest {
    requester: Types.ObjectId
    recipient: Types.ObjectId
    status: string
}

const associationRequestSchema = new mongoose.Schema<IAssociationRequest>({
    requester: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    recipient: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    status: {
        type: String,
        required: true,
    },
})

const AssociationRequest = mongoose.model<IAssociationRequest>(
    'AssociationRequest',
    associationRequestSchema,
)
export default AssociationRequest
