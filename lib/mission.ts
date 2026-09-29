export type Status = "idea" | "draft" | "review" | "ready";
export type ObjectiveKind = "travel" | "interaction" | "dialogue" | "combat" | "pursuit" | "choice" | "systemic";
export interface Objective { id: string; title: string; kind: ObjectiveKind; description: string; entry: string; completion: string; failure: string; checkpoint: boolean; }
export interface Scene { id: string; slug: string; stage: string; dialogue: string; }
export interface Choice { id: string; prompt: string; optionA: string; consequenceA: string; optionB: string; consequenceB: string; }
export interface MissionDraft { code: string; title: string; summary: string; premise: string; district: string; duration: number; status: Status; objectives: Objective[]; scenes: Scene[]; choices: Choice[]; qa: string; notes: string; }
export const blank: MissionDraft = { code:"CN_STORY_001", title:"Untitled mission", summary:"", premise:"", district:"Maarifa", duration:20, status:"idea", objectives:[], scenes:[], choices:[], qa:"", notes:"" };
export const example: MissionDraft = {
  code:"CN_STORY_001",title:"The Last Delivery",summary:"A routine delivery turns into a confrontation at the port.",
  premise:"Yassine agrees to transport a locked shipment for Karim. A rival group intercepts it, forcing him to choose whom he trusts.",
  district:"Maarifa / Port El Hadid",duration:18,status:"draft",
  objectives:[
    {id:"OBJ_010",title:"Meet Karim",kind:"dialogue",description:"Introduce the van and the debt.",entry:"Player enters garage trigger",completion:"Garage conversation ends",failure:"",checkpoint:true},
    {id:"OBJ_020",title:"Collect shipment",kind:"interaction",description:"Inspect the crate and load the van.",entry:"OBJ_010 complete",completion:"Cargo loaded and player seated",failure:"Van destroyed before loading",checkpoint:false},
    {id:"OBJ_030",title:"Escape the ambush",kind:"pursuit",description:"Break contact with two pursuer vehicles.",entry:"Player crosses port road trigger",completion:"No active pursuer nearby for 30 seconds",failure:"Player dies or van destroyed",checkpoint:true}
  ],
  scenes:[{id:"SC_01",slug:"KARIM'S GARAGE — LATE AFTERNOON",stage:"Karim slides out from underneath the car. He gestures at a van with a padlocked cargo door.",dialogue:"KARIM: One delivery. Two hours. Enough to pay what you owe.\nYASSINE: And what exactly am I delivering?"}],
  choices:[{id:"CHOICE_01",prompt:"Where does Yassine take the cargo?",optionA:"Original recipient",consequenceA:"Gain access to the port syndicate",optionB:"Karim's contact",consequenceB:"Improve trust with Karim"}],
  qa:"Verify retry restores van, cargo, pursuers, and mission stage. Ensure early destination arrival cannot bypass the ambush.", notes:"Keep the pursuit playable in narrow streets; avoid an extended delivery-only segment."
};
export const makeId = (prefix:string) => `${prefix}_${Math.random().toString(36).slice(2,9)}`;
