import { Schema, model, models } from "mongoose";

const freeAuditLeadSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    website: { type: String, default: "", trim: true },
    message: { type: String, default: "", trim: true },
  },
  { timestamps: true },
);

export const FreeAuditLead =
  models.FreeAuditLead || model("FreeAuditLead", freeAuditLeadSchema);
