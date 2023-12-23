export enum ReclaimEndpoints {
  Tasks = "tasks",
  Planner = "planner",
  Users = "users",
  Calendars = "calendars",
}

/**
 * An interface representing a Reclaim task.
 * Warning: This interface was reverse engineered from the Reclaim API and may be incomplete.
 */
export interface ReclaimTask {
  id: number;
  title: string;
  notes: string;
  eventCategory: string;
  eventSubType: string;
  eventColor: string | null;
  status: string;
  timeChunksRequired: number;
  timeChunksSpent: number;
  timeChunksRemaining: number;
  minChunkSize: number;
  maxChunkSize: number;
  alwaysPrivate: boolean;
  deleted: boolean;
  index: number;
  due: string;
  created: string;
  updated: string;
  adjusted: boolean;
  atRisk: boolean;
  timeSchemeId: string;
  priority: string;
  onDeck: boolean;
  sortKey: number;
  snoozeUntil: string | null;
  taskSource: {
    type: string;
  };
  readOnlyFields: string[];
  recurringAssignmentType: string;
  type: "TASK";
}

/**
 * A type representing the fields that can be updated on a Reclaim task.
 * Warning: This interface was reverse engineered from the Reclaim API and may be incomplete.
 */
export type ReclaimTaskCreate = Pick<
  ReclaimTask,
  | "title"
  | "eventCategory"
  | "eventColor"
  | "snoozeUntil"
  | "timeChunksRequired"
  | "minChunkSize"
  | "maxChunkSize"
  | "alwaysPrivate"
  | "timeSchemeId"
  | "priority"
  | "due"
  | "onDeck"
>;

/**
 * An interface representing a Reclaim user.
 * Warning: This interface was reverse engineered from the Reclaim API and may be incomplete.
 */
export interface ReclaimUser {
  id: string;
  email: string;
  principal: string;
  provider: string;
  name: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  admin: boolean;
  timestampOffsetMs: number;
  features: {
    scheduler: number;
    prioritizationEnabled: boolean;
    extraScopes: boolean;
    peopleScopes: boolean;
    assistSettings: {
      bypassed: boolean;
      travel: boolean;
      otherTravelDuration: number;
      conferenceBuffer: boolean;
      conferenceBufferType: string;
      conferenceBufferDuration: number;
      conferenceBufferPrivate: boolean;
      customConferenceBufferTitle: string;
      assignmentPaddingDuration: number;
      focus: boolean;
      allOneOnOnesBusy: boolean;
      autoLockForMeetings: string;
      autoLockForNonMeetings: string;
      sendMeetingNotifications: boolean;
    };
    openAISettings: {
      enabled: boolean;
    };
    slackSettings: {
      enabled: boolean;
      personalSyncNotifyNew: boolean;
      personalSyncNotifyUpdated: boolean;
      personalSyncNotifyDeleted: boolean;
      personalSyncNotificationsIncludingSelf: boolean;
      habitNotifyUpcoming: boolean;
      taskNotifyUpcoming: boolean;
      travelNotify: boolean;
      outsideHoursMigrated: boolean;
      statusSync: string;
      outSideHours: {
        policy: string;
        dnd: boolean;
      };
      privateStatus: {};
      statuses: {};
      statusEnabled: boolean;
    };
    taskSettings: {
      enabled: boolean;
      googleTasks: boolean;
      defaults: {
        timeChunksRequired: number;
        commsTimeChunksRequired: number;
        delayedStartInMinutes: number;
        dueInDays: number;
        category: string;
        alwaysPrivate: boolean;
        minChunkSize: number;
        maxChunkSize: number;
        timeSchemeId: string;
        priority: string;
        onDeck: boolean;
        splitUp: boolean;
      };
      autoWorkflowSettings: {
        category: string;
        durationToWaitInDays: number;
      };
      scheduleWorkQueueOnly: boolean;
    };
    priorities: {
      enabled: boolean;
    };
    colors: {
      enabled: boolean;
      projectsEnabled: boolean;
      prioritiesEnabled: boolean;
      categoriesEnabled: boolean;
      lastModified: string;
      priorities: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
      };
      categories: {
        WORK: string;
        MEETING: string;
        EXTERNAL: string;
        PERSONAL: string;
        LOGISTICS: string;
        ONE_ON_ONE: string;
      };
    };
    calendar: {
      enabled: boolean;
    };
    focus: {
      enabled: boolean;
    };
    asana: {
      enabled: boolean;
    };
    billing: {
      enabled: boolean;
    };
    projects: {
      enabled: boolean;
    };
    sync: {
      enabled: boolean;
    };
    appNotifications: {
      enabled: boolean;
      unscheduledPriority: boolean;
    };
    googleAddOnSettings: {
      enabled: boolean;
    };
    interests: {
      tasks: boolean;
      priorities: boolean;
      office365: boolean;
      calendar: boolean;
      asana: boolean;
      trello: boolean;
      todoist: boolean;
      jira: boolean;
      linear: boolean;
      clickup: boolean;
      monday: boolean;
    };
    onboard: {
      habits: boolean;
      tasks: boolean;
      googleTasks: boolean;
      planItemPrioritized: boolean;
      smartOneOnOnes: boolean;
      bufferTime: boolean;
      tasksReindex: boolean;
      googleAddOn: boolean;
      schedulingLinks: boolean;
      v16Scheduler: boolean;
    };
    weeklyReport: {
      enabled: boolean;
      sendReport: boolean;
    };
    smartOneOnOnes: {
      enabled: boolean;
    };
    schedulingLinks: {
      enabled: boolean;
      note: string;
      remindersMigrated: boolean;
      messageTemplates: {};
    };
    eventStorage: {
      enabled: boolean;
      writeMode: string;
      readMode: string;
      backfilled: boolean;
    };
    calendarEntrySettings: {
      pipelineEnabled: boolean;
      pipelineWatchEnabled: boolean;
    };
    availableMeetingTimes: number[];
    quests: {
      enabled: boolean;
    };
  };
  assistFeatures: {
    version: number;
  };
  settings: {
    autoAddHangouts: boolean;
    defaultEventLength: number;
    weekStart: number;
    format24HourTime: boolean;
    locale: string;
    showDeclinedEvents: boolean;
    timezone: string;
    dateFieldOrder: string;
  };
  created: string;
  onboarded: boolean;
  trackingCode: string;
  locale: string;
  likelyPersonal: boolean;
  primaryCalendar: {
    id: number;
    timezone: {
      id: string;
      displayName: string;
      abbreviation: string;
    };
    calendarId: string;
    lastSynced: string;
    credentialId: number;
  };
  edition: string;
  editionAfterTrial: string;
  editionUsage: string;
  metadata: {
    jobTitle: string;
    companyName: string;
    companySize: string;
    usecase: string;
    role: string;
    department: string;
  };
  timezone: {
    id: string;
    displayName: string;
    abbreviation: string;
  };
  slackEnabled: boolean;
  primaryCalendarId: string;
  startOfWeek: string;
  overage: boolean;
  editionEntitlements: {
    INTEGRATION_GOOGLE_ADD_ON: {
      value: boolean;
    };
    MAX_TASKS: {
      value: string;
    };
    CUSTOM_BLOCKING_CALENDAR_SYNC: {
      value: boolean;
    };
    MAX_1_ON_1_ATTEND: {
      value: string;
    };
    CUSTOM_BLOCKING: {
      value: boolean;
    };
    INTEGRATION_JIRA: {
      value: boolean;
    };
    CUSTOM_BLOCKING_DECOMPRESSION: {
      value: boolean;
    };
    TRAVEL_TIME: {
      value: boolean;
    };
    INTEGRATION_TODOIST: {
      value: boolean;
    };
    INTEGRATION_CLICKUP: {
      value: boolean;
    };
    SSO: {
      value: boolean;
      nextValue: boolean;
      nextEdition: string;
    };
    MAX_TEAM_SIZE: {
      value: number;
      nextValue: number;
      nextEdition: string;
    };
    SCHEDULER_WEEKS: {
      value: number;
    };
    SCHEDULING_LINK_SURVEY: {
      value: boolean;
    };
    CUSTOM_BLOCKING_HABITS: {
      value: boolean;
    };
    CUSTOM_SLACK_STATUS: {
      value: boolean;
    };
    INTEGRATION_SLACK: {
      value: boolean;
    };
    SCHEDULING_LINK_REDIRECT: {
      value: boolean;
    };
    INTEGRATIONS: {
      value: string;
    };
    MAX_SCHEDULING_LINK_MEETINGS_QUARTER: {
      value: string;
    };
    DECOMPRESSION_TIME: {
      value: boolean;
    };
    INTEGRATION_GOOGLE_TASKS: {
      value: boolean;
    };
    SUPPORT: {
      value: string;
    };
    MAX_CALENDARS: {
      value: string;
    };
    DERIVATIVE_SCHEDULING_LINKS: {
      value: boolean;
    };
    MAX_HABITS: {
      value: string;
    };
    INTEGRATION_OFFICE_365: {
      value: boolean;
    };
    TEAM_ANALYTICS: {
      value: boolean;
    };
    INTEGRATION_LINEAR: {
      value: boolean;
    };
    INTEGRATION_TRELLO: {
      value: boolean;
    };
    MAX_SCHEDULING_LINKS: {
      value: string;
    };
    INTEGRATION_RAYCAST: {
      value: boolean;
    };
    INTEGRATION_ZOOM: {
      value: boolean;
    };
    INTEGRATION_MONDAY: {
      value: boolean;
    };
    MAX_TASKS_WEEK: {
      value: string;
    };
    INTEGRATION_ASANA: {
      value: boolean;
    };
    MAX_SYNCS: {
      value: string;
    };
    MAX_1_ON_1_ORGANIZE: {
      value: string;
    };
    MAX_CUSTOM_TIME_SCHEMES: {
      value: string;
    };
  };
  entitlements: {
    schedulingLinkSurveyEnabled: boolean;
    todoistEnabled: boolean;
    clickupEnabled: boolean;
    unlimitedHabitsEnabled: boolean;
    unlimitedConnectedCalendarsEnabled: boolean;
    unlimitedSyncEnabled: boolean;
    customSyncTransparencyEnabled: boolean;
    smart11CreationEnabled: boolean;
    customSlackSyncStatusEnabled: boolean;
    customConferenceBufferTitleEnabled: boolean;
    maxDaysAheadForSchedulingLinks: number;
    linearEnabled: boolean;
    jiraEnabled: boolean;
    asanaEnabled: boolean;
    trelloEnabled: boolean;
    mondayEnabled: boolean;
  };
  detailedEntitlements: {
    unlimitedHabitsEnabled: {
      minimumEdition: string;
      name: string;
      enabledForUser: boolean;
    };
    unlimitedSyncEnabled: {
      minimumEdition: string;
      name: string;
      enabledForUser: boolean;
    };
    unlimitedConnectedCalendarsEnabled: {
      minimumEdition: string;
      name: string;
      enabledForUser: boolean;
    };
    customSyncTransparencyEnabled: {
      minimumEdition: string;
      name: string;
      enabledForUser: boolean;
    };
    smart11CreationEnabled: {
      minimumEdition: string;
      name: string;
      enabledForUser: boolean;
    };
    customSlackSyncStatusEnabled: {
      minimumEdition: string;
      name: string;
      enabledForUser: boolean;
    };
    customConferenceBufferTitleEnabled: {
      minimumEdition: string;
      name: string;
      enabledForUser: boolean;
    };
    linearEnabled: {
      minimumEdition: string;
      name: string;
      enabledForUser: boolean;
    };
    jiraEnabled: {
      minimumEdition: string;
      name: string;
      enabledForUser: boolean;
    };
    todoistEnabled: {
      minimumEdition: string;
      name: string;
      enabledForUser: boolean;
    };
    asanaEnabled: {
      minimumEdition: string;
      name: string;
      enabledForUser: boolean;
    };
    clickupEnabled: {
      minimumEdition: string;
      name: string;
      enabledForUser: boolean;
    };
    trelloEnabled: {
      minimumEdition: string;
      name: string;
      enabledForUser: boolean;
    };
    mondayEnabled: {
      minimumEdition: string;
      name: string;
      enabledForUser: boolean;
    };
  };
  sku: string;
}

/**
 * An interface representing a Reclaim calendar.
 * Warning: This interface was reverse engineered from the Reclaim API and may be incomplete.
 */
export interface ReclaimCalendar {
  id: number;
}