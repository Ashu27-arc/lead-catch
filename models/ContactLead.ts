import { Schema, model, models } from "mongoose";

const contactLeadSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, default: "", trim: true },
    website: { type: String, default: "", trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export const ContactLead =
  models.ContactLead || model("ContactLead", contactLeadSchema);
