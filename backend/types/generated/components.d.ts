import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAdvantage extends Struct.ComponentSchema {
  collectionName: 'components_shared_advantages';
  info: {
    displayName: 'Advantage';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedCampusInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_campus_infos';
  info: {
    displayName: 'campus_info';
  };
  attributes: {
    facilities: Schema.Attribute.Component<'shared.facility-item', true>;
    main_text: Schema.Attribute.Text;
  };
}

export interface SharedFacilityItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_facility_items';
  info: {
    displayName: 'FacilityItem';
  };
  attributes: {
    subtext: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'faq_item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface SharedFastFacts extends Struct.ComponentSchema {
  collectionName: 'components_shared_fast_facts';
  info: {
    displayName: 'fast_facts';
  };
  attributes: {
    academic_year: Schema.Attribute.String;
    capital: Schema.Attribute.String;
    currency: Schema.Attribute.String;
  };
}

export interface SharedScheduleItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_schedule_items';
  info: {
    displayName: 'ScheduleItem';
  };
  attributes: {
    activity: Schema.Attribute.String;
    time: Schema.Attribute.String;
  };
}

export interface SharedStats extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'stats';
    icon: 'calendar';
  };
  attributes: {
    programs: Schema.Attribute.String;
    students: Schema.Attribute.String;
    universities: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.advantage': SharedAdvantage;
      'shared.campus-info': SharedCampusInfo;
      'shared.facility-item': SharedFacilityItem;
      'shared.faq-item': SharedFaqItem;
      'shared.fast-facts': SharedFastFacts;
      'shared.schedule-item': SharedScheduleItem;
      'shared.stats': SharedStats;
    }
  }
}
