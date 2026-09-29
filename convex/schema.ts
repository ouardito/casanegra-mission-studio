import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export const objective = v.object({ id:v.string(),title:v.string(),kind:v.union(v.literal("travel"),v.literal("interaction"),v.literal("dialogue"),v.literal("combat"),v.literal("pursuit"),v.literal("choice"),v.literal("systemic")),description:v.string(),entry:v.string(),completion:v.string(),failure:v.string(),checkpoint:v.boolean() });
export const scene = v.object({id:v.string(),slug:v.string(),stage:v.string(),dialogue:v.string()});
export const choice = v.object({id:v.string(),prompt:v.string(),optionA:v.string(),consequenceA:v.string(),optionB:v.string(),consequenceB:v.string()});
export const mission = {code:v.string(),title:v.string(),summary:v.string(),premise:v.string(),district:v.string(),duration:v.number(),status:v.union(v.literal("idea"),v.literal("draft"),v.literal("review"),v.literal("ready")),objectives:v.array(objective),scenes:v.array(scene),choices:v.array(choice),qa:v.string(),notes:v.string()};
export default defineSchema({ missions:defineTable({ownerId:v.string(),...mission,updatedAt:v.number(), notionPageId:v.optional(v.string()),notionUrl:v.optional(v.string())}).index("by_owner",["ownerId"])});
