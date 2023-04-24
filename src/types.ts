interface Project {
  id: number;
  owner_id: number;
  title: string;
  status: string;
  sub_status: string | null;
  seo_url: string;
  currency: Currency;
  description: string | null;
  jobs: any;
  submitdate: number;
  preview_description: string;
  deleted: boolean;
  nonpublic: boolean;
  hidebids: boolean;
  type: string;
  bidperiod: number;
  budget: Budget;
  hourly_project_info: any;
  featured: boolean;
  urgent: boolean;
  assisted: any;
  active_prepaid_milestone: any;
  bid_stats: BidStats;
  time_submitted: number;
  time_updated: number;
  upgrades: Upgrades;
  qualifications: any;
  language: string;
  attachments: any;
  hireme: boolean;
  hireme_initial_bid: any;
  invited_freelancers: any;
  recommended_freelancers: any;
  frontend_project_status: string;
  nda_signatures: any;
  location: Location;
  true_location: any;
  local: boolean;
  negotiated: boolean;
  negotiated_bid: any;
  time_free_bids_expire: number;
  can_post_review: any;
  files: any;
  user_distance: any;
  from_user_location: any;
  project_collaborations: any;
  support_sessions: any;
  track_ids: any;
  drive_files: any;
  nda_details: any;
  pool_ids: string[];
  enterprise_ids: any[];
  timeframe: any;
  deloitte_details: any;
  is_escrow_project: boolean;
  is_seller_kyc_required: boolean;
  is_buyer_kyc_required: boolean;
  local_details: any;
  equipment: any;
  nda_signatures_new: any;
  billing_code: any;
  enterprise_metadata_values: any;
  project_reject_reason: ProjectRejectReason;
  repost_id: any;
  client_engagement: any;
  contract_signatures: any;
  quotation_id: any;
  quotation_version_id: any;
  enterprise_linked_projects_details: any;
  equipment_groups: any;
  project_source: any;
  project_source_reference: any;
  quality_details: any;
  previous_recruiter_project_details: any;
  project_note: any;
  is_quotation_project: any;
  quotation_initial_bid: any;
  requires_upfront_funding: any;
}

interface Currency {
  id: number;
  code: string;
  sign: string;
  name: string;
  exchange_rate: number;
  country: string;
  is_external: boolean;
  is_escrowcom_supported: boolean;
}

interface Budget {
  minimum: number;
  maximum: number;
  name: any;
  project_type: any;
  currency_id: any;
}

interface BidStats {
  bid_count: number;
  bid_avg: number;
}

interface Upgrades {
  featured: boolean;
  sealed: boolean;
  nonpublic: boolean;
  fulltime: boolean;
  urgent: boolean;
  qualified: boolean;
  NDA: boolean;
  assisted: any;
  active_prepaid_milestone: any;
  ip_contract: boolean;
  success_bundle: any;
  non_compete: boolean;
  project_management: boolean;
  pf_only: boolean;
  recruiter: any;
  listed: any;
  extend: any;
  unpaid_recruiter: any;
  premium: boolean;
  enterprise: boolean;
}

interface Location {
  country: Country;
  city: any;
  latitude: any;
  longitude: any;
  vicinity: any;
  administrative_area: any;
  full_address: any;
  administrative_area_code: any;
  postal_code: any;
  id: any;
}

interface Country {
  name: any;
  flag_url: any;
  code: any;
  highres_flag_url: any;
  flag_url_cdn: any;
  highres_flag_url_cdn: any;
  iso3: any;
  region_id: any;
  phone_code: any;
  demonym: any;
  person: any;
  seo_url: any;
  sanction: any;
  language_code: any;
  language_id: any;
}

interface ProjectRejectReason {
  description: any;
  message: any;
}

// Interface for the result object returned by the API
export interface ProjectList {
  status: string;
  result: {
    projects: Project[];
    users: any;
    selected_bids: any;
    total_count: number;
  };
  request_id: string;
}
