
export enum Sender {
  React,
  Content
}

export interface ChromeMessage {
  from: Sender,
  message: unknown
}

export type RawManifest = {
  pets: RawManifestItem[]
}

export type RawManifestItem = {
  id: string,
  baseUrl: string
}

export type PetInfo = {
  id: string,
  name: string,
  bio: string
}

export type PetStatDefinitionJSON = {
  id: string,
  label: string,
  value: number,
  perMinute: number,
  max: number,
  fullIsGood: boolean,
  statEffects: RawWhenThen[]
}

export type PetStatDefinition = {
  id: string,
  label: string,
  value: number,
  perMinute: number,
  max: number,
  fullIsGood: boolean,
  statEffects: WhenThenNumberGroup[]
}

export type PetManifestEntry = {
  id: string,
  baseUrl: string
}

export type AlertType = 'alert' | 'warning' | 'reward';
export type PetStatusDefinition = {
  id: string,
  label: string,
  message: string,
  fgImage: string,
  bgImage: string,
  alertType?: AlertType
}

export type PetInteractionEvent = {
  interaction: PetInteractionDefinition;
  time: number;
}


export type PetInteractionDefinition = {
  id: string,
  label: string,
  cooldown: number,
  changeStats: StatChangeDefinition[],
  changeToggle: PetToggleDefinition | null,
  availability: WhenThenStringBooleanGroup[],
  hideWhenUnavailable: boolean
}

export type PetInteractionDefinitionJSON = {
  id: string,
  label: string,
  cooldown: number,
  changeToggle?: PetToggleDefinitionJSON,
  changeStats?: StatChangeDefinition[],
  availability: RawWhenThen[],
  hideWhenUnavailable?: boolean
}

export type StatChangeDefinition = {
  statId: string,
  type: 'incremental' | 'absolute',
  value: number
}

export type PetBehaviorDefinition = {
  id: string,
  type: 'normal' | 'dead',
  imageUrl: string,
  bgImageUrl?: string,
  position: string,
  offsetX: number,
  offsetY: number
}

export type PetBehaviorJSON = {
  id: string,
  type?: 'dead',
  image?: string,
  imageUrl?: string,
  
  bgImage?: string,
  position: string,
  offsetX?: number,
  offsetY?: number
}

export type WhenNumber = {
  condition: ConditionOperator,
  criteria: number,
  isPercent: boolean
}
export type RawWhenThen = {
  when?: string | string[] | string[][],
  then: (string | string[] | boolean | WhenThenStringGroup[]),
}
export type WhenThenNumberGroup = {
  when: WhenNumber[],
  then: string
}

// in whens, first depth is AND, second depth is OR
// when: [ "REQUIRED", [ "AND", "AT_LEAST", "ONE_OF", "THESE"]]
// then: "this"
// OR
// then : { when: [], then: "" }
export type WhenThenStringGroup = {
  when: string | string[] | string[][],
  then: string | WhenThenStringGroup[]
}
export type WhenThenStringBooleanGroup = {
  when: string[],
  then: boolean
}

export type ToggleStateDefinition = {
  statusId?: string,
  statId?: string,
  perMinute?: number
}
export type PetToggleDefinition = {
  defaultState: 'on' | 'off',
  onState: ToggleStateDefinition[],
  offState: ToggleStateDefinition[]
}
export type PetToggleDefinitionJSON = {
  defaultState?: 'on' | 'off',
  onState?: ToggleStateDefinition[],
  offState?: ToggleStateDefinition[]
}

export type PetLogicGroup = {
  stats: PetStatDefinition[],
  statuses: PetStatusDefinition[],
  behaviors: PetBehaviorDefinition[],
  behaviorRules: WhenThenStringGroup[],
  interactions: PetInteractionDefinition[]
}

export type PingPayload = {
  time: number
}

export type RawPetStatuses = {
  [key: string]: PetStatusDefinition
}
export type ThemeStrings = {
  [key: string]: string
}
export type RawPetJSON = {
  id: string,
  name: string,
  bio: string,
  baseUrl: string,
  theme: ThemeStrings,
  logic: {
    stats: PetStatDefinitionJSON[],
    statuses: RawPetStatuses,
    behaviors: PetBehaviorJSON[],
    behaviorRules: WhenThenStringGroup[],
    interactions: PetInteractionDefinitionJSON[]
  },
  bgImage?:string,
  bgColor?:string
}

export type PetDefinition = {
  id: string,
  name: string,
  bio: string,
  bornOn?: number,
  diedOn?: number,
  logic: PetLogicGroup,
  bgImage?:string,
  bgColor?:string,
  theme?: ThemeStrings
}

export type PetListItem = {
  name: string,
  id: string,
  isActive?: boolean
}

// slimmer save object for localStorage
export type DeltaPetStat = {
  id: string,
  value: number
}
export type ActiveToggleState = {
  id: string,
  state: 'on' | 'off',
  effect: ToggleStateDefinition[]
}
export type SavedPetState = {
  id: string,
  stats: DeltaPetStat[],
  lastSaved?: number,
  bornOn?: number,
  diedOn?: number,
  beingTracked?: boolean,
  activeToggles: ActiveToggleState[]
}

export type InteractionCooldownStatus = {
  id: string,
  startAt: number,
  endAt: number // result of cooldown, if cooldown is 0, this whole record wouldnt have been saved
}

export type PetInteractionDetail = {
  id: string,
  label: string,
  startAt: number,
  endAt: number,
  enabled: boolean,
  visible: boolean,
  definition: PetInteractionDefinition,
  cooldownStatus: InteractionCooldownStatus,
}

export type LocalStorageState = {
  config: {
    activePet?: string,
    lastSaved: number,
  },
  interactions: InteractionCooldownStatus[],
  pets: SavedPetState[]
}

export type ConditionOperator = '='|'<'|'<='|'>'|'>=';

export type DeltaStat = {
  id: string,
  value: number,
  max: number,
  label: string
}
