"use client";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import {Slot} from "@radix-ui/react-slot";
import {cva,type VariantProps} from "class-variance-authority";
import {X} from "lucide-react";
import {cn} from "@/lib/utils";
const variants=cva("inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",{variants:{variant:{default:"bg-accent text-neutral-950 hover:bg-amber-200",outline:"border border-border bg-transparent hover:bg-muted",ghost:"hover:bg-muted text-foreground",danger:"bg-red-950 text-red-200 hover:bg-red-900"},size:{default:"h-10 px-4",sm:"h-8 px-3 text-xs",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});
export function Button({asChild=false,variant,size,className,...props}:React.ButtonHTMLAttributes<HTMLButtonElement>&VariantProps<typeof variants>&{asChild?:boolean}){const Comp=asChild?Slot:"button";return <Comp className={cn(variants({variant,size}),className)} {...props}/>}
export function Card({className,...props}:React.HTMLAttributes<HTMLDivElement>){return <div className={cn("rounded-xl border border-border bg-card",className)} {...props}/>}
export function Input(props:React.InputHTMLAttributes<HTMLInputElement>){return <input {...props} className={cn("h-10 w-full rounded-lg border border-border bg-background px-3 text-sm placeholder:text-neutral-500",props.className)}/>}
export function Textarea(props:React.TextareaHTMLAttributes<HTMLTextAreaElement>){return <textarea {...props} className={cn("min-h-28 w-full resize-y rounded-lg border border-border bg-background p-3 text-sm leading-relaxed placeholder:text-neutral-500",props.className)}/>}
export function Field({label,helper,children}:{label:string;helper?:string;children:React.ReactNode}){return <label className="block space-y-1.5"><span className="block text-sm font-semibold">{label}</span>{children}{helper&&<span className="block text-xs text-neutral-400">{helper}</span>}</label>}
export function Badge({children,className}:{children:React.ReactNode;className?:string}){return <span className={cn("inline-flex items-center rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] font-semibold tracking-wide text-neutral-300",className)}>{children}</span>}
export const Tabs=TabsPrimitive.Root;
export const TabsList=({className,...props}:React.ComponentProps<typeof TabsPrimitive.List>)=><TabsPrimitive.List className={cn("flex w-full gap-1 overflow-x-auto border-b border-border",className)} {...props}/>;
export const TabsTrigger=({className,...props}:React.ComponentProps<typeof TabsPrimitive.Trigger>)=><TabsPrimitive.Trigger className={cn("shrink-0 border-b-2 border-transparent px-3 py-3 text-sm text-neutral-400 data-[state=active]:border-accent data-[state=active]:text-foreground",className)} {...props}/>;
export const TabsContent=({className,...props}:React.ComponentProps<typeof TabsPrimitive.Content>)=><TabsPrimitive.Content className={cn("pt-6",className)} {...props}/>;
export const Dialog=DialogPrimitive.Root;export const DialogTrigger=DialogPrimitive.Trigger;export const DialogTitle=DialogPrimitive.Title;export const DialogDescription=DialogPrimitive.Description;export const DialogClose=DialogPrimitive.Close;
export function DialogContent({children,className,...props}:React.ComponentProps<typeof DialogPrimitive.Content>){return <DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/75"/><DialogPrimitive.Content {...props} className={cn("fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-border bg-card p-6 shadow-2xl",className)}>{children}<DialogPrimitive.Close className="absolute right-4 top-4 rounded-md p-1 hover:bg-muted" aria-label="Close"><X className="size-4"/></DialogPrimitive.Close></DialogPrimitive.Content></DialogPrimitive.Portal>}
