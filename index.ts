/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type ChainAddressRequest = object;

export interface NodeRequestPost {
  id?: string;
}

export interface ValueResponse {
  value?: string;
}

export type AnyResponse = object;

export interface OkResponse {
  ok?: boolean;
}

export interface ErrorResponse {
  errorMessage?: string;
  errorCode?: string;
  statusCode?: number;
}

/**
 * MoodPagedListReadPublicResponse Model
 */
export interface MoodPagedListReadPublicResponse {
  value?: {
    coverContentUrl?: string;
    created?: string;
    author?: {
      powered?: number;
      newcoinAccTx?: string;
      newcoinPoolId?: string;
      aspectRatio?: number;
      instagram?: string;
      newcoinActivePublicKey?: string;
      newcoinPublicKey?: string;
      powering?: number;
      lastUpdated?: string;
      twitter?: string;
      newcoinOwnerPublicKey?: string;
      tiktok?: string;
      reddit?: string;
      id?: string;
      contentType?: string;
      signal?: string;
      longitude?: number;
      coverContentUrl?: string;
      created?: string;
      facebookId?: string;
      verifiedSocialIds?: string[];
      newcoinPoolTx?: string;
      license?: string;
      discord?: string;
      updated?: string;
      newcoinTicker?: string;
      youtube?: string;
      displayName?: string;
      latitude?: number;
      description?: string;
      tumblr?: string;
      medium?: string;
      soundcloud?: string;
      snapchat?: string;
      apple?: string;
      watts?: number;
      youtubeId?: string;
      newcoinPoolStake?: number;
      ethAddress?: string;
      newcoinPublisherPublicKey?: string;
      website?: string;
      spotify?: string;
      facebook?: string;
      fullName?: string;
      telegram?: string;
      pinterest?: string;
      label?: "user";
      "evm/0x1"?: string;
      contentUrl?: string;
      deleted?: boolean;
      blurHash?: string;
      consentEmail?: string;
      username?: string;
    };
    latitude?: number;
    flags?: string;
    description?: string;
    aspectRatio?: number;
    label?: "mood";
    isPrivate?: boolean;
    title?: string;
    posts?: {
      coverContentUrl?: string;
      moodId?: string;
      created?: string;
      author?: {
        powered?: number;
        newcoinAccTx?: string;
        newcoinPoolId?: string;
        aspectRatio?: number;
        instagram?: string;
        newcoinActivePublicKey?: string;
        newcoinPublicKey?: string;
        powering?: number;
        lastUpdated?: string;
        twitter?: string;
        newcoinOwnerPublicKey?: string;
        tiktok?: string;
        reddit?: string;
        id?: string;
        contentType?: string;
        signal?: string;
        longitude?: number;
        coverContentUrl?: string;
        created?: string;
        facebookId?: string;
        verifiedSocialIds?: string[];
        newcoinPoolTx?: string;
        license?: string;
        discord?: string;
        updated?: string;
        newcoinTicker?: string;
        youtube?: string;
        displayName?: string;
        latitude?: number;
        description?: string;
        tumblr?: string;
        medium?: string;
        soundcloud?: string;
        snapchat?: string;
        apple?: string;
        watts?: number;
        youtubeId?: string;
        newcoinPoolStake?: number;
        ethAddress?: string;
        newcoinPublisherPublicKey?: string;
        website?: string;
        spotify?: string;
        facebook?: string;
        fullName?: string;
        telegram?: string;
        pinterest?: string;
        label?: "user";
        "evm/0x1"?: string;
        contentUrl?: string;
        deleted?: boolean;
        blurHash?: string;
        consentEmail?: string;
        username?: string;
      };
      latitude?: number;
      moods?: {
        coverContentUrl?: string;
        created?: string;
        author?: {
          powered?: number;
          newcoinAccTx?: string;
          newcoinPoolId?: string;
          aspectRatio?: number;
          instagram?: string;
          newcoinActivePublicKey?: string;
          newcoinPublicKey?: string;
          powering?: number;
          lastUpdated?: string;
          twitter?: string;
          newcoinOwnerPublicKey?: string;
          tiktok?: string;
          reddit?: string;
          id?: string;
          contentType?: string;
          signal?: string;
          longitude?: number;
          coverContentUrl?: string;
          created?: string;
          facebookId?: string;
          verifiedSocialIds?: string[];
          newcoinPoolTx?: string;
          license?: string;
          discord?: string;
          updated?: string;
          newcoinTicker?: string;
          youtube?: string;
          displayName?: string;
          latitude?: number;
          description?: string;
          tumblr?: string;
          medium?: string;
          soundcloud?: string;
          snapchat?: string;
          apple?: string;
          watts?: number;
          youtubeId?: string;
          newcoinPoolStake?: number;
          ethAddress?: string;
          newcoinPublisherPublicKey?: string;
          website?: string;
          spotify?: string;
          facebook?: string;
          fullName?: string;
          telegram?: string;
          pinterest?: string;
          label?: "user";
          "evm/0x1"?: string;
          contentUrl?: string;
          deleted?: boolean;
          blurHash?: string;
          consentEmail?: string;
          username?: string;
        };
        latitude?: number;
        flags?: string;
        description?: string;
        aspectRatio?: number;
        label?: "mood";
        isPrivate?: boolean;
        title?: string;
        content?: string;
        stakeToAccess?: number;
        tags?: {
          _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
          id?: string;
          value?: string;
        }[];
        contentUrl?: string;
        deleted?: boolean;
        defaultView?: string;
        postsCount?: number;
        blurHash?: string;
        id?: string;
        updated?: string;
        contentType?: string;
        longitude?: number;
      }[];
      rating?: number;
      description?: string;
      aspectRatio?: number;
      label?: "post";
      title?: string;
      content?: string;
      tags?: {
        _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
        id?: string;
        value?: string;
      }[];
      license?: string;
      contentUrl?: string;
      deleted?: boolean;
      blurHash?: string;
      newcoinMintTx?: string;
      id?: string;
      embed?: string;
      updated?: string;
      contentType?: string;
      longitude?: number;
    }[];
    content?: string;
    stakeToAccess?: number;
    tags?: {
      _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
      id?: string;
      value?: string;
    }[];
    contentUrl?: string;
    deleted?: boolean;
    defaultView?: string;
    postsCount?: number;
    blurHash?: string;
    id?: string;
    updated?: string;
    contentType?: string;
    longitude?: number;
  }[];
  done?: boolean;
}

export interface UserReadPublicResponse {
  powered?: number;
  newcoinAccTx?: string;
  newcoinPoolId?: string;
  aspectRatio?: number;
  instagram?: string;
  newcoinActivePublicKey?: string;
  newcoinPublicKey?: string;
  powering?: number;
  lastUpdated?: string;
  twitter?: string;
  newcoinOwnerPublicKey?: string;
  tiktok?: string;
  reddit?: string;
  id?: string;
  contentType?: string;
  signal?: string;
  longitude?: number;
  coverContentUrl?: string;
  created?: string;
  facebookId?: string;
  verifiedSocialIds?: string[];
  newcoinPoolTx?: string;
  license?: string;
  discord?: string;
  updated?: string;
  newcoinTicker?: string;
  youtube?: string;
  displayName?: string;
  latitude?: number;
  description?: string;
  tumblr?: string;
  medium?: string;
  soundcloud?: string;
  snapchat?: string;
  apple?: string;
  watts?: number;
  youtubeId?: string;
  newcoinPoolStake?: number;
  ethAddress?: string;
  newcoinPublisherPublicKey?: string;
  website?: string;
  spotify?: string;
  facebook?: string;
  fullName?: string;
  telegram?: string;
  pinterest?: string;
  label?: "user";
  "evm/0x1"?: string;
  contentUrl?: string;
  deleted?: boolean;
  blurHash?: string;
  consentEmail?: string;
  username?: string;
}

export interface UserReadPrivateResponse {
  powered?: number;
  proLevel?: number;
  newcoinAccTx?: string;
  bio?: string;
  newcoinPoolId?: string;
  aspectRatio?: number;
  instagram?: string;
  newcoinActivePublicKey?: string;
  newcoinPublicKey?: string;
  powering?: number;
  stripeUid?: string;
  twitter?: string;
  isAgent?: boolean;
  newcoinOwnerPublicKey?: string;
  tiktok?: string;
  reddit?: string;
  id?: string;
  contentType?: string;
  signal?: string;
  longitude?: number;
  coverContentUrl?: string;
  subscriptionExpiry?: string;
  created?: string;
  availableInvites?: number;
  facebookId?: string;
  newcoinPoolTx?: string;
  verifiedSocialIds?: string[];
  firstName?: string;
  license?: string;
  discord?: string;
  phone?: string;
  newcoinNCOBalance?: number;
  updated?: string;
  status?: string;
  newcoinTicker?: string;
  youtube?: string;
  lastName?: string;
  consentPrivacyPolicy?: string;
  displayName?: string;
  latitude?: number;
  description?: string;
  tumblr?: string;
  medium?: string;
  soundcloud?: string;
  snapchat?: string;
  apple?: string;
  consentTestgroup?: string;
  newcoinPrivateKey?: string;
  watts?: number;
  smartDropGeneration?: string;
  subscriptionStatus?: string;
  newcoinPublisherPrivateKey?: string;
  youtubeId?: string;
  categories?: string[];
  newcoinPoolStake?: number;
  ethAddress?: string;
  email?: string;
  isPro?: boolean;
  newcoinPublisherPublicKey?: string;
  newcoinActivePrivateKey?: string;
  website?: string;
  spotify?: string;
  facebook?: string;
  fullName?: string;
  telegram?: string;
  pinterest?: string;
  newcoinOwnerPrivateKey?: string;
  "evm/0x1"?: string;
  contentUrl?: string;
  deleted?: boolean;
  blurHash?: string;
  isNetwork?: boolean;
  consentEmail?: string;
  subwatts?: string;
  username?: string;
}

export interface UserStakeRequest {
  amount: string;
  key?: string;
  username: string;
}

export interface UserTransferRequest {
  encryptedPayload?: string;
  payload?: string;
}

export interface WattsClaimRequest {
  claims?: object[];
}

export interface WattsClaimResponse {
  failed?: { claim?: { wattType?: string; claim?: number }; error?: { error?: string } }[];
  updated?: { claim?: { wattType?: string; claim?: number } }[];
}

export interface UserCreateRequest {
  newcoinTicker?: string;
  youtube?: string;
  lastName?: string;
  consentPrivacyPolicy?: string;
  displayName?: string;
  latitude?: number;
  description?: string;
  tumblr?: string;
  instagram?: string;
  medium?: string;
  soundcloud?: string;
  snapchat?: string;
  apple?: string;
  consentTestgroup?: string;
  twitter?: string;
  inviteHash?: string;
  legacyToken?: string;
  tiktok?: string;
  reddit?: string;
  signal?: string;
  email?: string;
  longitude?: number;
  website?: string;
  spotify?: string;
  facebook?: string;
  fullName?: string;
  telegram?: string;
  pinterest?: string;
  firstName?: string;
  discord?: string;
  phone?: string;
  consentEmail?: string;
  couponCode?: string;

  /** @pattern ^[a-z][a-z0-9\.\-]{2,32}$ */
  username?: string;
}

export interface UserPreRegisterRequest {
  consentTestgroup?: string;
  consentPrivacyPolicy?: string;
  phone?: string;
  fullName?: string;
  consentEmail?: string;
  email?: string;
}

export interface UserAvailabilityResponse {
  offer?: string;
  available?: boolean;
}

export type UserUpdateRequest = (
  | { fullName: string }
  | { firstName: string }
  | { website: string }
  | { description: string }
  | { longitude: number }
  | { latitude: number }
  | { instagram: string }
  | { tiktok: string }
  | { youtube: string }
  | { twitter: string }
  | { spotify: string }
  | { pinterest: string }
  | { snapchat: string }
  | { reddit: string }
  | { discord: string }
  | { tumblr: string }
  | { soundcloud: string }
  | { apple: string }
  | { telegram: string }
  | { signal: string }
  | { medium: string }
  | { facebook: string }
  | ({ fullName: string } & { firstName: string } & { website: string } & { description: string } & {
      longitude: number;
    } & { latitude: number } & { instagram: string } & { tiktok: string } & { youtube: string } & {
      twitter: string;
    } & { spotify: string } & { pinterest: string } & { snapchat: string } & { reddit: string } & {
      discord: string;
    } & { tumblr: string } & { soundcloud: string } & { apple: string } & { telegram: string } & { signal: string } & {
      medium: string;
    } & { facebook: string })
) & {
  youtube?: string;
  lastName?: string;
  consentPrivacyPolicy?: string;
  displayName?: string;
  latitude?: number;
  newcoinCreateAccount?: string;
  description?: string;
  bio?: string;
  tumblr?: string;
  instagram?: string;
  medium?: string;
  soundcloud?: string;
  snapchat?: string;
  apple?: string;
  twitter?: string;
  isAgent?: string;
  tiktok?: string;
  reddit?: string;
  id: string;
  categories?: string[];
  signal?: string;
  longitude?: number;
  website?: string;
  spotify?: string;
  facebook?: string;
  fullName?: string;
  telegram?: string;
  pinterest?: string;
  firstName?: string;
  discord?: string;
  consentEmail?: string;
  username?: string;
};

export interface SyncContactsRequest {
  contacts?: {
    birthday?: string;
    identifier?: string;
    androidAccountName?: string;
    displayName?: string;
    prefix?: string;
    givenName?: string;
    jobTitle?: string;
    phones?: { label?: string; value?: string }[];
    avatar?: string;
    suffix?: string;
    postalAddresses?: {
      country?: string;
      city?: string;
      street?: string;
      postcode?: string;
      label?: string;
      region?: string;
    }[];
    emails?: { label?: string; value?: string }[];
    androidAccountType?: string;
    familyName?: string;
    middleName?: string;
    company?: string;
    androidAccountTypeRaw?: string;
  }[];
}

export type SyncContactsResponse = object;

export interface UserPagedListReadPublicResponse {
  value?: {
    powered?: number;
    newcoinAccTx?: string;
    newcoinPoolId?: string;
    aspectRatio?: number;
    instagram?: string;
    newcoinActivePublicKey?: string;
    newcoinPublicKey?: string;
    powering?: number;
    lastUpdated?: string;
    twitter?: string;
    newcoinOwnerPublicKey?: string;
    tiktok?: string;
    reddit?: string;
    id?: string;
    contentType?: string;
    signal?: string;
    longitude?: number;
    coverContentUrl?: string;
    created?: string;
    facebookId?: string;
    verifiedSocialIds?: string[];
    newcoinPoolTx?: string;
    license?: string;
    discord?: string;
    updated?: string;
    newcoinTicker?: string;
    youtube?: string;
    displayName?: string;
    latitude?: number;
    description?: string;
    tumblr?: string;
    medium?: string;
    soundcloud?: string;
    snapchat?: string;
    apple?: string;
    watts?: number;
    youtubeId?: string;
    newcoinPoolStake?: number;
    ethAddress?: string;
    newcoinPublisherPublicKey?: string;
    website?: string;
    spotify?: string;
    facebook?: string;
    fullName?: string;
    telegram?: string;
    pinterest?: string;
    label?: "user";
    "evm/0x1"?: string;
    contentUrl?: string;
    deleted?: boolean;
    blurHash?: string;
    consentEmail?: string;
    username?: string;
  }[];
  done?: boolean;
}

export interface UserInvitationPagedListReadPublicResponse {
  value?: {
    powered?: number;
    newcoinAccTx?: string;
    newcoinPoolId?: string;
    aspectRatio?: number;
    instagram?: string;
    newcoinActivePublicKey?: string;
    newcoinPublicKey?: string;
    powering?: number;
    lastUpdated?: string;
    twitter?: string;
    newcoinOwnerPublicKey?: string;
    tiktok?: string;
    reddit?: string;
    id?: string;
    contentType?: string;
    signal?: string;
    longitude?: number;
    coverContentUrl?: string;
    created?: string;
    invitation?: {
      youtube?: string;
      created?: string;
      spotify?: string;
      facebook?: string;
      tumblr?: string;
      telegram?: string;
      pinterest?: string;
      instagram?: string;
      medium?: string;
      soundcloud?: string;
      snapchat?: string;
      apple?: string;
      twitter?: string;
      discord?: string;
      tiktok?: string;
      reddit?: string;
      signal?: string;
      hash?: string;
    };
    facebookId?: string;
    verifiedSocialIds?: string[];
    newcoinPoolTx?: string;
    license?: string;
    discord?: string;
    updated?: string;
    newcoinTicker?: string;
    youtube?: string;
    displayName?: string;
    latitude?: number;
    description?: string;
    tumblr?: string;
    medium?: string;
    soundcloud?: string;
    snapchat?: string;
    apple?: string;
    watts?: number;
    youtubeId?: string;
    newcoinPoolStake?: number;
    ethAddress?: string;
    newcoinPublisherPublicKey?: string;
    website?: string;
    spotify?: string;
    facebook?: string;
    fullName?: string;
    telegram?: string;
    pinterest?: string;
    label?: "user";
    "evm/0x1"?: string;
    contentUrl?: string;
    deleted?: boolean;
    blurHash?: string;
    consentEmail?: string;
    username?: string;
  }[];
  done?: boolean;
}

export interface UserInvitationReadPublicResponse {
  powered?: number;
  newcoinAccTx?: string;
  newcoinPoolId?: string;
  aspectRatio?: number;
  instagram?: string;
  newcoinActivePublicKey?: string;
  newcoinPublicKey?: string;
  powering?: number;
  lastUpdated?: string;
  twitter?: string;
  newcoinOwnerPublicKey?: string;
  tiktok?: string;
  reddit?: string;
  id?: string;
  contentType?: string;
  signal?: string;
  longitude?: number;
  coverContentUrl?: string;
  created?: string;
  invitation?: {
    youtube?: string;
    created?: string;
    spotify?: string;
    facebook?: string;
    tumblr?: string;
    telegram?: string;
    pinterest?: string;
    instagram?: string;
    medium?: string;
    soundcloud?: string;
    snapchat?: string;
    apple?: string;
    twitter?: string;
    discord?: string;
    tiktok?: string;
    reddit?: string;
    signal?: string;
    hash?: string;
  };
  facebookId?: string;
  verifiedSocialIds?: string[];
  newcoinPoolTx?: string;
  license?: string;
  discord?: string;
  updated?: string;
  newcoinTicker?: string;
  youtube?: string;
  displayName?: string;
  latitude?: number;
  description?: string;
  tumblr?: string;
  medium?: string;
  soundcloud?: string;
  snapchat?: string;
  apple?: string;
  watts?: number;
  youtubeId?: string;
  newcoinPoolStake?: number;
  ethAddress?: string;
  newcoinPublisherPublicKey?: string;
  website?: string;
  spotify?: string;
  facebook?: string;
  fullName?: string;
  telegram?: string;
  pinterest?: string;
  label?: "user";
  "evm/0x1"?: string;
  contentUrl?: string;
  deleted?: boolean;
  blurHash?: string;
  consentEmail?: string;
  username?: string;
}

export type UserInviteRequest = (
  | object
  | object
  | { instagram: string }
  | { tiktok: string }
  | { youtube: string }
  | { twitter: string }
  | { spotify: string }
  | { pinterest: string }
  | { snapchat: string }
  | { reddit: string }
  | { discord: string }
  | { tumblr: string }
  | { soundcloud: string }
  | { apple: string }
  | { telegram: string }
  | { signal: string }
  | { medium: string }
  | { facebook: string }
  | (object &
      object & { instagram: string } & { tiktok: string } & { youtube: string } & { twitter: string } & {
        spotify: string;
      } & { pinterest: string } & { snapchat: string } & { reddit: string } & { discord: string } & {
        tumblr: string;
      } & { soundcloud: string } & { apple: string } & { telegram: string } & { signal: string } & {
        medium: string;
      } & { facebook: string })
) & {
  youtube?: string;
  spotify?: string;
  facebook?: string;
  fullName: string;
  tumblr?: string;
  telegram?: string;
  pinterest?: string;
  instagram?: string;
  medium?: string;
  soundcloud?: string;
  snapchat?: string;
  apple?: string;
  twitter?: string;
  discord?: string;
  phone?: string;
  tiktok?: string;
  reddit?: string;
  signal?: string;
  email?: string;
};

export interface UserDeleteRequest {
  phone?: string;
  email?: string;
}

export interface UserBadgesListResponseSchema {
  value?: {
    body?: {
      deleted?: boolean;
      created?: string;
      name?: string;
      id?: string;
      title?: string;
      type?: string;
      value?: object;
      updated?: string;
    };
  }[];
  done?: boolean;
}

export interface UserGrantsResponse {
  value?: { level?: string; target?: { id?: string; label?: string } }[];
  done?: boolean;
}

export interface RatingUpdateRequest {
  targetId?: string;
  contextType?: string;
  contextValue?: string;

  /**
   * @min -1
   * @max 100
   */
  value: number;
}

export interface RatingNegativeRequest {
  targetId?: string;
}

export interface PagedRatedResponseUser {
  value?: {
    powered?: number;
    newcoinAccTx?: string;
    rating?: { created?: string; TxID_mintAsset?: string; value?: number; updated?: string };
    newcoinPoolId?: string;
    aspectRatio?: number;
    instagram?: string;
    newcoinActivePublicKey?: string;
    newcoinPublicKey?: string;
    powering?: number;
    lastUpdated?: string;
    twitter?: string;
    newcoinOwnerPublicKey?: string;
    tiktok?: string;
    reddit?: string;
    id?: string;
    contentType?: string;
    signal?: string;
    longitude?: number;
    coverContentUrl?: string;
    created?: string;
    facebookId?: string;
    verifiedSocialIds?: string[];
    newcoinPoolTx?: string;
    license?: string;
    discord?: string;
    updated?: string;
    newcoinTicker?: string;
    youtube?: string;
    displayName?: string;
    latitude?: number;
    description?: string;
    tumblr?: string;
    medium?: string;
    soundcloud?: string;
    snapchat?: string;
    apple?: string;
    watts?: number;
    youtubeId?: string;
    newcoinPoolStake?: number;
    ethAddress?: string;
    newcoinPublisherPublicKey?: string;
    website?: string;
    spotify?: string;
    facebook?: string;
    fullName?: string;
    telegram?: string;
    pinterest?: string;
    label?: "user";
    "evm/0x1"?: string;
    contentUrl?: string;
    deleted?: boolean;
    blurHash?: string;
    consentEmail?: string;
    username?: string;
  }[];
  done?: boolean;
}

export interface PagedRatedResponsePost {
  value?: {
    coverContentUrl?: string;
    moodId?: string;
    created?: string;
    author?: {
      powered?: number;
      newcoinAccTx?: string;
      newcoinPoolId?: string;
      aspectRatio?: number;
      instagram?: string;
      newcoinActivePublicKey?: string;
      newcoinPublicKey?: string;
      powering?: number;
      lastUpdated?: string;
      twitter?: string;
      newcoinOwnerPublicKey?: string;
      tiktok?: string;
      reddit?: string;
      id?: string;
      contentType?: string;
      signal?: string;
      longitude?: number;
      coverContentUrl?: string;
      created?: string;
      facebookId?: string;
      verifiedSocialIds?: string[];
      newcoinPoolTx?: string;
      license?: string;
      discord?: string;
      updated?: string;
      newcoinTicker?: string;
      youtube?: string;
      displayName?: string;
      latitude?: number;
      description?: string;
      tumblr?: string;
      medium?: string;
      soundcloud?: string;
      snapchat?: string;
      apple?: string;
      watts?: number;
      youtubeId?: string;
      newcoinPoolStake?: number;
      ethAddress?: string;
      newcoinPublisherPublicKey?: string;
      website?: string;
      spotify?: string;
      facebook?: string;
      fullName?: string;
      telegram?: string;
      pinterest?: string;
      label?: "user";
      "evm/0x1"?: string;
      contentUrl?: string;
      deleted?: boolean;
      blurHash?: string;
      consentEmail?: string;
      username?: string;
    };
    latitude?: number;
    moods?: {
      coverContentUrl?: string;
      created?: string;
      author?: {
        powered?: number;
        newcoinAccTx?: string;
        newcoinPoolId?: string;
        aspectRatio?: number;
        instagram?: string;
        newcoinActivePublicKey?: string;
        newcoinPublicKey?: string;
        powering?: number;
        lastUpdated?: string;
        twitter?: string;
        newcoinOwnerPublicKey?: string;
        tiktok?: string;
        reddit?: string;
        id?: string;
        contentType?: string;
        signal?: string;
        longitude?: number;
        coverContentUrl?: string;
        created?: string;
        facebookId?: string;
        verifiedSocialIds?: string[];
        newcoinPoolTx?: string;
        license?: string;
        discord?: string;
        updated?: string;
        newcoinTicker?: string;
        youtube?: string;
        displayName?: string;
        latitude?: number;
        description?: string;
        tumblr?: string;
        medium?: string;
        soundcloud?: string;
        snapchat?: string;
        apple?: string;
        watts?: number;
        youtubeId?: string;
        newcoinPoolStake?: number;
        ethAddress?: string;
        newcoinPublisherPublicKey?: string;
        website?: string;
        spotify?: string;
        facebook?: string;
        fullName?: string;
        telegram?: string;
        pinterest?: string;
        label?: "user";
        "evm/0x1"?: string;
        contentUrl?: string;
        deleted?: boolean;
        blurHash?: string;
        consentEmail?: string;
        username?: string;
      };
      latitude?: number;
      flags?: string;
      description?: string;
      aspectRatio?: number;
      label?: "mood";
      title?: string;
      content?: string;
      stakeToAccess?: number;
      tags?: {
        _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
        id?: string;
        value?: string;
      }[];
      contentUrl?: string;
      deleted?: boolean;
      defaultView?: string;
      postsCount?: number;
      blurHash?: string;
      id?: string;
      updated?: string;
      contentType?: string;
      longitude?: number;
    }[];
    rating?: { created?: string; TxID_mintAsset?: string; value?: number; updated?: string };
    description?: string;
    aspectRatio?: number;
    label?: "post";
    title?: string;
    content?: string;
    tags?: {
      _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
      id?: string;
      value?: string;
    }[];
    license?: string;
    contentUrl?: string;
    deleted?: boolean;
    blurHash?: string;
    newcoinMintTx?: string;
    id?: string;
    embed?: string;
    updated?: string;
    contentType?: string;
    longitude?: number;
  }[];
  done?: boolean;
}

export interface RatingUpdateResponse {
  created?: string;
  TxID_mintAsset?: string;

  /**
   * @min 0
   * @max 100
   */
  value?: number;
  updated?: string;
}

export interface UserUploadRequest {
  filename: string;
  contentType: string;
}

export interface UploadRequest {
  filename: string;
  targetId: string;
  targetModel: string;
  contentType: string;
}

export interface UploadRequestGeneric {
  filename: string;
  targetId: string;
  contentType: string;
}

export interface UploadResponse {
  filename?: string;
  key?: string;
  url?: string;
}

export interface ReportUpdateRequest {
  reason: string;
  targetId: string;
  comment?: string;
}

export interface ReportUpdateResponse {
  id?: number;
}

export interface PostCreateResponse {
  coverContentUrl?: string;
  moodId?: string;
  created?: string;
  author?: {
    powered?: number;
    newcoinAccTx?: string;
    newcoinPoolId?: string;
    aspectRatio?: number;
    instagram?: string;
    newcoinActivePublicKey?: string;
    newcoinPublicKey?: string;
    powering?: number;
    lastUpdated?: string;
    twitter?: string;
    newcoinOwnerPublicKey?: string;
    tiktok?: string;
    reddit?: string;
    id?: string;
    contentType?: string;
    signal?: string;
    longitude?: number;
    coverContentUrl?: string;
    created?: string;
    facebookId?: string;
    verifiedSocialIds?: string[];
    newcoinPoolTx?: string;
    license?: string;
    discord?: string;
    updated?: string;
    newcoinTicker?: string;
    youtube?: string;
    displayName?: string;
    latitude?: number;
    description?: string;
    tumblr?: string;
    medium?: string;
    soundcloud?: string;
    snapchat?: string;
    apple?: string;
    watts?: number;
    youtubeId?: string;
    newcoinPoolStake?: number;
    ethAddress?: string;
    newcoinPublisherPublicKey?: string;
    website?: string;
    spotify?: string;
    facebook?: string;
    fullName?: string;
    telegram?: string;
    pinterest?: string;
    label?: "user";
    "evm/0x1"?: string;
    contentUrl?: string;
    deleted?: boolean;
    blurHash?: string;
    consentEmail?: string;
    username?: string;
  };
  latitude?: number;
  moods?: {
    coverContentUrl?: string;
    created?: string;
    author?: {
      powered?: number;
      newcoinAccTx?: string;
      newcoinPoolId?: string;
      aspectRatio?: number;
      instagram?: string;
      newcoinActivePublicKey?: string;
      newcoinPublicKey?: string;
      powering?: number;
      lastUpdated?: string;
      twitter?: string;
      newcoinOwnerPublicKey?: string;
      tiktok?: string;
      reddit?: string;
      id?: string;
      contentType?: string;
      signal?: string;
      longitude?: number;
      coverContentUrl?: string;
      created?: string;
      facebookId?: string;
      verifiedSocialIds?: string[];
      newcoinPoolTx?: string;
      license?: string;
      discord?: string;
      updated?: string;
      newcoinTicker?: string;
      youtube?: string;
      displayName?: string;
      latitude?: number;
      description?: string;
      tumblr?: string;
      medium?: string;
      soundcloud?: string;
      snapchat?: string;
      apple?: string;
      watts?: number;
      youtubeId?: string;
      newcoinPoolStake?: number;
      ethAddress?: string;
      newcoinPublisherPublicKey?: string;
      website?: string;
      spotify?: string;
      facebook?: string;
      fullName?: string;
      telegram?: string;
      pinterest?: string;
      label?: "user";
      "evm/0x1"?: string;
      contentUrl?: string;
      deleted?: boolean;
      blurHash?: string;
      consentEmail?: string;
      username?: string;
    };
    latitude?: number;
    flags?: string;
    description?: string;
    aspectRatio?: number;
    label?: "mood";
    title?: string;
    content?: string;
    stakeToAccess?: number;
    tags?: {
      _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
      id?: string;
      value?: string;
    }[];
    contentUrl?: string;
    deleted?: boolean;
    defaultView?: string;
    postsCount?: number;
    blurHash?: string;
    id?: string;
    updated?: string;
    contentType?: string;
    longitude?: number;
  }[];
  rating?: number;
  description?: string;
  aspectRatio?: number;
  label?: "post";
  title?: string;
  content?: string;
  tags?: {
    _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
    id?: string;
    value?: string;
  }[];
  license?: string;
  contentUrl?: string;
  deleted?: boolean;
  blurHash?: string;
  newcoinMintTx?: string;
  id?: string;
  embed?: string;
  updated?: string;
  contentType?: string;
  longitude?: number;
}

/**
 * PostReadResponse Model
 */
export interface PostReadResponse {
  coverContentUrl?: string;
  moodId?: string;
  created?: string;
  author?: {
    powered?: number;
    newcoinAccTx?: string;
    newcoinPoolId?: string;
    aspectRatio?: number;
    instagram?: string;
    newcoinActivePublicKey?: string;
    newcoinPublicKey?: string;
    powering?: number;
    lastUpdated?: string;
    twitter?: string;
    newcoinOwnerPublicKey?: string;
    tiktok?: string;
    reddit?: string;
    id?: string;
    contentType?: string;
    signal?: string;
    longitude?: number;
    coverContentUrl?: string;
    created?: string;
    facebookId?: string;
    verifiedSocialIds?: string[];
    newcoinPoolTx?: string;
    license?: string;
    discord?: string;
    updated?: string;
    newcoinTicker?: string;
    youtube?: string;
    displayName?: string;
    latitude?: number;
    description?: string;
    tumblr?: string;
    medium?: string;
    soundcloud?: string;
    snapchat?: string;
    apple?: string;
    watts?: number;
    youtubeId?: string;
    newcoinPoolStake?: number;
    ethAddress?: string;
    newcoinPublisherPublicKey?: string;
    website?: string;
    spotify?: string;
    facebook?: string;
    fullName?: string;
    telegram?: string;
    pinterest?: string;
    label?: "user";
    "evm/0x1"?: string;
    contentUrl?: string;
    deleted?: boolean;
    blurHash?: string;
    consentEmail?: string;
    username?: string;
  };
  latitude?: number;
  moods?: {
    coverContentUrl?: string;
    created?: string;
    author?: {
      powered?: number;
      newcoinAccTx?: string;
      newcoinPoolId?: string;
      aspectRatio?: number;
      instagram?: string;
      newcoinActivePublicKey?: string;
      newcoinPublicKey?: string;
      powering?: number;
      lastUpdated?: string;
      twitter?: string;
      newcoinOwnerPublicKey?: string;
      tiktok?: string;
      reddit?: string;
      id?: string;
      contentType?: string;
      signal?: string;
      longitude?: number;
      coverContentUrl?: string;
      created?: string;
      facebookId?: string;
      verifiedSocialIds?: string[];
      newcoinPoolTx?: string;
      license?: string;
      discord?: string;
      updated?: string;
      newcoinTicker?: string;
      youtube?: string;
      displayName?: string;
      latitude?: number;
      description?: string;
      tumblr?: string;
      medium?: string;
      soundcloud?: string;
      snapchat?: string;
      apple?: string;
      watts?: number;
      youtubeId?: string;
      newcoinPoolStake?: number;
      ethAddress?: string;
      newcoinPublisherPublicKey?: string;
      website?: string;
      spotify?: string;
      facebook?: string;
      fullName?: string;
      telegram?: string;
      pinterest?: string;
      label?: "user";
      "evm/0x1"?: string;
      contentUrl?: string;
      deleted?: boolean;
      blurHash?: string;
      consentEmail?: string;
      username?: string;
    };
    latitude?: number;
    flags?: string;
    description?: string;
    aspectRatio?: number;
    label?: "mood";
    isPrivate?: boolean;
    title?: string;
    content?: string;
    stakeToAccess?: number;
    tags?: {
      _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
      id?: string;
      value?: string;
    }[];
    contentUrl?: string;
    deleted?: boolean;
    defaultView?: string;
    postsCount?: number;
    blurHash?: string;
    id?: string;
    updated?: string;
    contentType?: string;
    longitude?: number;
  }[];
  rating?: number;
  description?: string;
  aspectRatio?: number;
  label?: "post";
  title?: string;
  content?: string;
  tags?: {
    _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
    id?: string;
    value?: string;
  }[];
  license?: string;
  contentUrl?: string;
  deleted?: boolean;
  blurHash?: string;
  newcoinMintTx?: string;
  id?: string;
  embed?: string;
  updated?: string;
  contentType?: string;
  longitude?: number;
}

export interface PostCreateRequest {
  license?: string;
  doMint?: string;
  description?: string;
  id?: string;
  embed?: string;
  title?: string;
  contentType?: string;
  content?: string;
}

export type PostUpdateRequest = (
  | { title: string }
  | { description: string }
  | { longitude: number }
  | { latitude: number }
  | { license?: string }
  | { doMint: boolean }
  | ({ title: string } & { description: string } & { longitude: number } & { latitude: number } & {
      license?: string;
    } & { doMint: boolean })
) & {
  license?: string;
  latitude?: number;
  doMint?: boolean;
  description?: string;
  id: string;
  title?: string;
  longitude?: number;
};

export interface PostPagedListReadPublicResponse {
  value?: {
    coverContentUrl?: string;
    moodId?: string;
    created?: string;
    author?: {
      powered?: number;
      newcoinAccTx?: string;
      newcoinPoolId?: string;
      aspectRatio?: number;
      instagram?: string;
      newcoinActivePublicKey?: string;
      newcoinPublicKey?: string;
      powering?: number;
      lastUpdated?: string;
      twitter?: string;
      newcoinOwnerPublicKey?: string;
      tiktok?: string;
      reddit?: string;
      id?: string;
      contentType?: string;
      signal?: string;
      longitude?: number;
      coverContentUrl?: string;
      created?: string;
      facebookId?: string;
      verifiedSocialIds?: string[];
      newcoinPoolTx?: string;
      license?: string;
      discord?: string;
      updated?: string;
      newcoinTicker?: string;
      youtube?: string;
      displayName?: string;
      latitude?: number;
      description?: string;
      tumblr?: string;
      medium?: string;
      soundcloud?: string;
      snapchat?: string;
      apple?: string;
      watts?: number;
      youtubeId?: string;
      newcoinPoolStake?: number;
      ethAddress?: string;
      newcoinPublisherPublicKey?: string;
      website?: string;
      spotify?: string;
      facebook?: string;
      fullName?: string;
      telegram?: string;
      pinterest?: string;
      label?: "user";
      "evm/0x1"?: string;
      contentUrl?: string;
      deleted?: boolean;
      blurHash?: string;
      consentEmail?: string;
      username?: string;
    };
    latitude?: number;
    moods?: {
      coverContentUrl?: string;
      created?: string;
      author?: {
        powered?: number;
        newcoinAccTx?: string;
        newcoinPoolId?: string;
        aspectRatio?: number;
        instagram?: string;
        newcoinActivePublicKey?: string;
        newcoinPublicKey?: string;
        powering?: number;
        lastUpdated?: string;
        twitter?: string;
        newcoinOwnerPublicKey?: string;
        tiktok?: string;
        reddit?: string;
        id?: string;
        contentType?: string;
        signal?: string;
        longitude?: number;
        coverContentUrl?: string;
        created?: string;
        facebookId?: string;
        verifiedSocialIds?: string[];
        newcoinPoolTx?: string;
        license?: string;
        discord?: string;
        updated?: string;
        newcoinTicker?: string;
        youtube?: string;
        displayName?: string;
        latitude?: number;
        description?: string;
        tumblr?: string;
        medium?: string;
        soundcloud?: string;
        snapchat?: string;
        apple?: string;
        watts?: number;
        youtubeId?: string;
        newcoinPoolStake?: number;
        ethAddress?: string;
        newcoinPublisherPublicKey?: string;
        website?: string;
        spotify?: string;
        facebook?: string;
        fullName?: string;
        telegram?: string;
        pinterest?: string;
        label?: "user";
        "evm/0x1"?: string;
        contentUrl?: string;
        deleted?: boolean;
        blurHash?: string;
        consentEmail?: string;
        username?: string;
      };
      latitude?: number;
      flags?: string;
      description?: string;
      aspectRatio?: number;
      label?: "mood";
      title?: string;
      content?: string;
      stakeToAccess?: number;
      tags?: {
        _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
        id?: string;
        value?: string;
      }[];
      contentUrl?: string;
      deleted?: boolean;
      defaultView?: string;
      postsCount?: number;
      blurHash?: string;
      id?: string;
      updated?: string;
      contentType?: string;
      longitude?: number;
    }[];
    rating?: number;
    description?: string;
    aspectRatio?: number;
    label?: "post";
    title?: string;
    content?: string;
    tags?: {
      _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
      id?: string;
      value?: string;
    }[];
    license?: string;
    contentUrl?: string;
    deleted?: boolean;
    blurHash?: string;
    newcoinMintTx?: string;
    id?: string;
    embed?: string;
    updated?: string;
    contentType?: string;
    longitude?: number;
  }[];
  done?: boolean;
}

export interface PostTagsSearchPublicResponse {
  done?: boolean;
  value?: { created?: string; tag?: string }[];
}

export interface PostRemoteMetaProxyResponse {
  text?: string;
  status?: number;
}

/**
 * MoodCreateResponse Model
 */
export interface MoodCreateResponse {
  coverContentUrl?: string;
  created?: string;
  author?: {
    powered?: number;
    newcoinAccTx?: string;
    newcoinPoolId?: string;
    aspectRatio?: number;
    instagram?: string;
    newcoinActivePublicKey?: string;
    newcoinPublicKey?: string;
    powering?: number;
    lastUpdated?: string;
    twitter?: string;
    newcoinOwnerPublicKey?: string;
    tiktok?: string;
    reddit?: string;
    id?: string;
    contentType?: string;
    signal?: string;
    longitude?: number;
    coverContentUrl?: string;
    created?: string;
    facebookId?: string;
    verifiedSocialIds?: string[];
    newcoinPoolTx?: string;
    license?: string;
    discord?: string;
    updated?: string;
    newcoinTicker?: string;
    youtube?: string;
    displayName?: string;
    latitude?: number;
    description?: string;
    tumblr?: string;
    medium?: string;
    soundcloud?: string;
    snapchat?: string;
    apple?: string;
    watts?: number;
    youtubeId?: string;
    newcoinPoolStake?: number;
    ethAddress?: string;
    newcoinPublisherPublicKey?: string;
    website?: string;
    spotify?: string;
    facebook?: string;
    fullName?: string;
    telegram?: string;
    pinterest?: string;
    label?: "user";
    "evm/0x1"?: string;
    contentUrl?: string;
    deleted?: boolean;
    blurHash?: string;
    consentEmail?: string;
    username?: string;
  };
  latitude?: number;
  flags?: string;
  description?: string;
  aspectRatio?: number;
  label?: "mood";
  isPrivate?: boolean;
  title?: string;
  posts?: {
    coverContentUrl?: string;
    moodId?: string;
    created?: string;
    author?: {
      powered?: number;
      newcoinAccTx?: string;
      newcoinPoolId?: string;
      aspectRatio?: number;
      instagram?: string;
      newcoinActivePublicKey?: string;
      newcoinPublicKey?: string;
      powering?: number;
      lastUpdated?: string;
      twitter?: string;
      newcoinOwnerPublicKey?: string;
      tiktok?: string;
      reddit?: string;
      id?: string;
      contentType?: string;
      signal?: string;
      longitude?: number;
      coverContentUrl?: string;
      created?: string;
      facebookId?: string;
      verifiedSocialIds?: string[];
      newcoinPoolTx?: string;
      license?: string;
      discord?: string;
      updated?: string;
      newcoinTicker?: string;
      youtube?: string;
      displayName?: string;
      latitude?: number;
      description?: string;
      tumblr?: string;
      medium?: string;
      soundcloud?: string;
      snapchat?: string;
      apple?: string;
      watts?: number;
      youtubeId?: string;
      newcoinPoolStake?: number;
      ethAddress?: string;
      newcoinPublisherPublicKey?: string;
      website?: string;
      spotify?: string;
      facebook?: string;
      fullName?: string;
      telegram?: string;
      pinterest?: string;
      label?: "user";
      "evm/0x1"?: string;
      contentUrl?: string;
      deleted?: boolean;
      blurHash?: string;
      consentEmail?: string;
      username?: string;
    };
    latitude?: number;
    moods?: {
      coverContentUrl?: string;
      created?: string;
      author?: {
        powered?: number;
        newcoinAccTx?: string;
        newcoinPoolId?: string;
        aspectRatio?: number;
        instagram?: string;
        newcoinActivePublicKey?: string;
        newcoinPublicKey?: string;
        powering?: number;
        lastUpdated?: string;
        twitter?: string;
        newcoinOwnerPublicKey?: string;
        tiktok?: string;
        reddit?: string;
        id?: string;
        contentType?: string;
        signal?: string;
        longitude?: number;
        coverContentUrl?: string;
        created?: string;
        facebookId?: string;
        verifiedSocialIds?: string[];
        newcoinPoolTx?: string;
        license?: string;
        discord?: string;
        updated?: string;
        newcoinTicker?: string;
        youtube?: string;
        displayName?: string;
        latitude?: number;
        description?: string;
        tumblr?: string;
        medium?: string;
        soundcloud?: string;
        snapchat?: string;
        apple?: string;
        watts?: number;
        youtubeId?: string;
        newcoinPoolStake?: number;
        ethAddress?: string;
        newcoinPublisherPublicKey?: string;
        website?: string;
        spotify?: string;
        facebook?: string;
        fullName?: string;
        telegram?: string;
        pinterest?: string;
        label?: "user";
        "evm/0x1"?: string;
        contentUrl?: string;
        deleted?: boolean;
        blurHash?: string;
        consentEmail?: string;
        username?: string;
      };
      latitude?: number;
      flags?: string;
      description?: string;
      aspectRatio?: number;
      label?: "mood";
      isPrivate?: boolean;
      title?: string;
      content?: string;
      stakeToAccess?: number;
      tags?: {
        _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
        id?: string;
        value?: string;
      }[];
      contentUrl?: string;
      deleted?: boolean;
      defaultView?: string;
      postsCount?: number;
      blurHash?: string;
      id?: string;
      updated?: string;
      contentType?: string;
      longitude?: number;
    }[];
    rating?: number;
    description?: string;
    aspectRatio?: number;
    label?: "post";
    title?: string;
    content?: string;
    tags?: {
      _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
      id?: string;
      value?: string;
    }[];
    license?: string;
    contentUrl?: string;
    deleted?: boolean;
    blurHash?: string;
    newcoinMintTx?: string;
    id?: string;
    embed?: string;
    updated?: string;
    contentType?: string;
    longitude?: number;
  }[];
  content?: string;
  stakeToAccess?: number;
  tags?: {
    _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
    id?: string;
    value?: string;
  }[];
  contentUrl?: string;
  deleted?: boolean;
  defaultView?: string;
  postsCount?: number;
  blurHash?: string;
  id?: string;
  updated?: string;
  contentType?: string;
  longitude?: number;
}

/**
 * MoodReadResponse Model
 */
export interface MoodReadResponse {
  coverContentUrl?: string;
  created?: string;
  author?: {
    powered?: number;
    newcoinAccTx?: string;
    newcoinPoolId?: string;
    aspectRatio?: number;
    instagram?: string;
    newcoinActivePublicKey?: string;
    newcoinPublicKey?: string;
    powering?: number;
    lastUpdated?: string;
    twitter?: string;
    newcoinOwnerPublicKey?: string;
    tiktok?: string;
    reddit?: string;
    id?: string;
    contentType?: string;
    signal?: string;
    longitude?: number;
    coverContentUrl?: string;
    created?: string;
    facebookId?: string;
    verifiedSocialIds?: string[];
    newcoinPoolTx?: string;
    license?: string;
    discord?: string;
    updated?: string;
    newcoinTicker?: string;
    youtube?: string;
    displayName?: string;
    latitude?: number;
    description?: string;
    tumblr?: string;
    medium?: string;
    soundcloud?: string;
    snapchat?: string;
    apple?: string;
    watts?: number;
    youtubeId?: string;
    newcoinPoolStake?: number;
    ethAddress?: string;
    newcoinPublisherPublicKey?: string;
    website?: string;
    spotify?: string;
    facebook?: string;
    fullName?: string;
    telegram?: string;
    pinterest?: string;
    label?: "user";
    "evm/0x1"?: string;
    contentUrl?: string;
    deleted?: boolean;
    blurHash?: string;
    consentEmail?: string;
    username?: string;
  };
  latitude?: number;
  flags?: string;
  description?: string;
  aspectRatio?: number;
  label?: "mood";
  isPrivate?: boolean;
  title?: string;
  posts?: {
    coverContentUrl?: string;
    moodId?: string;
    created?: string;
    author?: {
      powered?: number;
      newcoinAccTx?: string;
      newcoinPoolId?: string;
      aspectRatio?: number;
      instagram?: string;
      newcoinActivePublicKey?: string;
      newcoinPublicKey?: string;
      powering?: number;
      lastUpdated?: string;
      twitter?: string;
      newcoinOwnerPublicKey?: string;
      tiktok?: string;
      reddit?: string;
      id?: string;
      contentType?: string;
      signal?: string;
      longitude?: number;
      coverContentUrl?: string;
      created?: string;
      facebookId?: string;
      verifiedSocialIds?: string[];
      newcoinPoolTx?: string;
      license?: string;
      discord?: string;
      updated?: string;
      newcoinTicker?: string;
      youtube?: string;
      displayName?: string;
      latitude?: number;
      description?: string;
      tumblr?: string;
      medium?: string;
      soundcloud?: string;
      snapchat?: string;
      apple?: string;
      watts?: number;
      youtubeId?: string;
      newcoinPoolStake?: number;
      ethAddress?: string;
      newcoinPublisherPublicKey?: string;
      website?: string;
      spotify?: string;
      facebook?: string;
      fullName?: string;
      telegram?: string;
      pinterest?: string;
      label?: "user";
      "evm/0x1"?: string;
      contentUrl?: string;
      deleted?: boolean;
      blurHash?: string;
      consentEmail?: string;
      username?: string;
    };
    latitude?: number;
    moods?: {
      coverContentUrl?: string;
      created?: string;
      author?: {
        powered?: number;
        newcoinAccTx?: string;
        newcoinPoolId?: string;
        aspectRatio?: number;
        instagram?: string;
        newcoinActivePublicKey?: string;
        newcoinPublicKey?: string;
        powering?: number;
        lastUpdated?: string;
        twitter?: string;
        newcoinOwnerPublicKey?: string;
        tiktok?: string;
        reddit?: string;
        id?: string;
        contentType?: string;
        signal?: string;
        longitude?: number;
        coverContentUrl?: string;
        created?: string;
        facebookId?: string;
        verifiedSocialIds?: string[];
        newcoinPoolTx?: string;
        license?: string;
        discord?: string;
        updated?: string;
        newcoinTicker?: string;
        youtube?: string;
        displayName?: string;
        latitude?: number;
        description?: string;
        tumblr?: string;
        medium?: string;
        soundcloud?: string;
        snapchat?: string;
        apple?: string;
        watts?: number;
        youtubeId?: string;
        newcoinPoolStake?: number;
        ethAddress?: string;
        newcoinPublisherPublicKey?: string;
        website?: string;
        spotify?: string;
        facebook?: string;
        fullName?: string;
        telegram?: string;
        pinterest?: string;
        label?: "user";
        "evm/0x1"?: string;
        contentUrl?: string;
        deleted?: boolean;
        blurHash?: string;
        consentEmail?: string;
        username?: string;
      };
      latitude?: number;
      flags?: string;
      description?: string;
      aspectRatio?: number;
      label?: "mood";
      isPrivate?: boolean;
      title?: string;
      content?: string;
      stakeToAccess?: number;
      tags?: {
        _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
        id?: string;
        value?: string;
      }[];
      contentUrl?: string;
      deleted?: boolean;
      defaultView?: string;
      postsCount?: number;
      blurHash?: string;
      id?: string;
      updated?: string;
      contentType?: string;
      longitude?: number;
    }[];
    rating?: number;
    description?: string;
    aspectRatio?: number;
    label?: "post";
    title?: string;
    content?: string;
    tags?: {
      _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
      id?: string;
      value?: string;
    }[];
    license?: string;
    contentUrl?: string;
    deleted?: boolean;
    blurHash?: string;
    newcoinMintTx?: string;
    id?: string;
    embed?: string;
    updated?: string;
    contentType?: string;
    longitude?: number;
  }[];
  content?: string;
  stakeToAccess?: number;
  tags?: {
    _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
    id?: string;
    value?: string;
  }[];
  contentUrl?: string;
  deleted?: boolean;
  defaultView?: string;
  postsCount?: number;
  blurHash?: string;
  id?: string;
  updated?: string;
  contentType?: string;
  longitude?: number;
}

/**
 * MoodListAttachedPostsResponse Model
 */
export interface MoodListAttachedPostsResponse {
  value?: {
    coverContentUrl?: string;
    moodId?: string;
    created?: string;
    author?: {
      powered?: number;
      newcoinAccTx?: string;
      newcoinPoolId?: string;
      aspectRatio?: number;
      instagram?: string;
      newcoinActivePublicKey?: string;
      newcoinPublicKey?: string;
      powering?: number;
      lastUpdated?: string;
      twitter?: string;
      newcoinOwnerPublicKey?: string;
      tiktok?: string;
      reddit?: string;
      id?: string;
      contentType?: string;
      signal?: string;
      longitude?: number;
      coverContentUrl?: string;
      created?: string;
      facebookId?: string;
      verifiedSocialIds?: string[];
      newcoinPoolTx?: string;
      license?: string;
      discord?: string;
      updated?: string;
      newcoinTicker?: string;
      youtube?: string;
      displayName?: string;
      latitude?: number;
      description?: string;
      tumblr?: string;
      medium?: string;
      soundcloud?: string;
      snapchat?: string;
      apple?: string;
      watts?: number;
      youtubeId?: string;
      newcoinPoolStake?: number;
      ethAddress?: string;
      newcoinPublisherPublicKey?: string;
      website?: string;
      spotify?: string;
      facebook?: string;
      fullName?: string;
      telegram?: string;
      pinterest?: string;
      label?: "user";
      "evm/0x1"?: string;
      contentUrl?: string;
      deleted?: boolean;
      blurHash?: string;
      consentEmail?: string;
      username?: string;
    };
    latitude?: number;
    moods?: {
      coverContentUrl?: string;
      created?: string;
      author?: {
        powered?: number;
        newcoinAccTx?: string;
        newcoinPoolId?: string;
        aspectRatio?: number;
        instagram?: string;
        newcoinActivePublicKey?: string;
        newcoinPublicKey?: string;
        powering?: number;
        lastUpdated?: string;
        twitter?: string;
        newcoinOwnerPublicKey?: string;
        tiktok?: string;
        reddit?: string;
        id?: string;
        contentType?: string;
        signal?: string;
        longitude?: number;
        coverContentUrl?: string;
        created?: string;
        facebookId?: string;
        verifiedSocialIds?: string[];
        newcoinPoolTx?: string;
        license?: string;
        discord?: string;
        updated?: string;
        newcoinTicker?: string;
        youtube?: string;
        displayName?: string;
        latitude?: number;
        description?: string;
        tumblr?: string;
        medium?: string;
        soundcloud?: string;
        snapchat?: string;
        apple?: string;
        watts?: number;
        youtubeId?: string;
        newcoinPoolStake?: number;
        ethAddress?: string;
        newcoinPublisherPublicKey?: string;
        website?: string;
        spotify?: string;
        facebook?: string;
        fullName?: string;
        telegram?: string;
        pinterest?: string;
        label?: "user";
        "evm/0x1"?: string;
        contentUrl?: string;
        deleted?: boolean;
        blurHash?: string;
        consentEmail?: string;
        username?: string;
      };
      latitude?: number;
      flags?: string;
      description?: string;
      aspectRatio?: number;
      label?: "mood";
      isPrivate?: boolean;
      title?: string;
      content?: string;
      stakeToAccess?: number;
      tags?: {
        _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
        id?: string;
        value?: string;
      }[];
      contentUrl?: string;
      deleted?: boolean;
      defaultView?: string;
      postsCount?: number;
      blurHash?: string;
      id?: string;
      updated?: string;
      contentType?: string;
      longitude?: number;
    }[];
    rating?: number;
    description?: string;
    aspectRatio?: number;
    label?: "post";
    title?: string;
    content?: string;
    tags?: {
      _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
      id?: string;
      value?: string;
    }[];
    license?: string;
    contentUrl?: string;
    deleted?: boolean;
    blurHash?: string;
    newcoinMintTx?: string;
    id?: string;
    embed?: string;
    updated?: string;
    contentType?: string;
    longitude?: number;
  }[];
  done?: boolean;
}

/**
 * MoodListAttachedResponse Model
 */
export interface MoodListAttachedResponse {
  value?: (
    | {
        powered?: number;
        newcoinAccTx?: string;
        newcoinPoolId?: string;
        aspectRatio?: number;
        instagram?: string;
        newcoinActivePublicKey?: string;
        newcoinPublicKey?: string;
        powering?: number;
        lastUpdated?: string;
        twitter?: string;
        newcoinOwnerPublicKey?: string;
        tiktok?: string;
        reddit?: string;
        id?: string;
        contentType?: string;
        signal?: string;
        longitude?: number;
        coverContentUrl?: string;
        created?: string;
        facebookId?: string;
        verifiedSocialIds?: string[];
        newcoinPoolTx?: string;
        license?: string;
        discord?: string;
        updated?: string;
        newcoinTicker?: string;
        youtube?: string;
        displayName?: string;
        latitude?: number;
        description?: string;
        tumblr?: string;
        medium?: string;
        soundcloud?: string;
        snapchat?: string;
        apple?: string;
        watts?: number;
        youtubeId?: string;
        newcoinPoolStake?: number;
        ethAddress?: string;
        newcoinPublisherPublicKey?: string;
        website?: string;
        spotify?: string;
        facebook?: string;
        fullName?: string;
        telegram?: string;
        pinterest?: string;
        label?: "user";
        "evm/0x1"?: string;
        contentUrl?: string;
        deleted?: boolean;
        blurHash?: string;
        consentEmail?: string;
        username?: string;
      }
    | {
        coverContentUrl?: string;
        moodId?: string;
        created?: string;
        author?: {
          powered?: number;
          newcoinAccTx?: string;
          newcoinPoolId?: string;
          aspectRatio?: number;
          instagram?: string;
          newcoinActivePublicKey?: string;
          newcoinPublicKey?: string;
          powering?: number;
          lastUpdated?: string;
          twitter?: string;
          newcoinOwnerPublicKey?: string;
          tiktok?: string;
          reddit?: string;
          id?: string;
          contentType?: string;
          signal?: string;
          longitude?: number;
          coverContentUrl?: string;
          created?: string;
          facebookId?: string;
          verifiedSocialIds?: string[];
          newcoinPoolTx?: string;
          license?: string;
          discord?: string;
          updated?: string;
          newcoinTicker?: string;
          youtube?: string;
          displayName?: string;
          latitude?: number;
          description?: string;
          tumblr?: string;
          medium?: string;
          soundcloud?: string;
          snapchat?: string;
          apple?: string;
          watts?: number;
          youtubeId?: string;
          newcoinPoolStake?: number;
          ethAddress?: string;
          newcoinPublisherPublicKey?: string;
          website?: string;
          spotify?: string;
          facebook?: string;
          fullName?: string;
          telegram?: string;
          pinterest?: string;
          label?: "user";
          "evm/0x1"?: string;
          contentUrl?: string;
          deleted?: boolean;
          blurHash?: string;
          consentEmail?: string;
          username?: string;
        };
        latitude?: number;
        moods?: {
          coverContentUrl?: string;
          created?: string;
          author?: {
            powered?: number;
            newcoinAccTx?: string;
            newcoinPoolId?: string;
            aspectRatio?: number;
            instagram?: string;
            newcoinActivePublicKey?: string;
            newcoinPublicKey?: string;
            powering?: number;
            lastUpdated?: string;
            twitter?: string;
            newcoinOwnerPublicKey?: string;
            tiktok?: string;
            reddit?: string;
            id?: string;
            contentType?: string;
            signal?: string;
            longitude?: number;
            coverContentUrl?: string;
            created?: string;
            facebookId?: string;
            verifiedSocialIds?: string[];
            newcoinPoolTx?: string;
            license?: string;
            discord?: string;
            updated?: string;
            newcoinTicker?: string;
            youtube?: string;
            displayName?: string;
            latitude?: number;
            description?: string;
            tumblr?: string;
            medium?: string;
            soundcloud?: string;
            snapchat?: string;
            apple?: string;
            watts?: number;
            youtubeId?: string;
            newcoinPoolStake?: number;
            ethAddress?: string;
            newcoinPublisherPublicKey?: string;
            website?: string;
            spotify?: string;
            facebook?: string;
            fullName?: string;
            telegram?: string;
            pinterest?: string;
            label?: "user";
            "evm/0x1"?: string;
            contentUrl?: string;
            deleted?: boolean;
            blurHash?: string;
            consentEmail?: string;
            username?: string;
          };
          latitude?: number;
          flags?: string;
          description?: string;
          aspectRatio?: number;
          label?: "mood";
          isPrivate?: boolean;
          title?: string;
          content?: string;
          stakeToAccess?: number;
          tags?: {
            _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
            id?: string;
            value?: string;
          }[];
          contentUrl?: string;
          deleted?: boolean;
          defaultView?: string;
          postsCount?: number;
          blurHash?: string;
          id?: string;
          updated?: string;
          contentType?: string;
          longitude?: number;
        }[];
        rating?: number;
        description?: string;
        aspectRatio?: number;
        label?: "post";
        title?: string;
        content?: string;
        tags?: {
          _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
          id?: string;
          value?: string;
        }[];
        license?: string;
        contentUrl?: string;
        deleted?: boolean;
        blurHash?: string;
        newcoinMintTx?: string;
        id?: string;
        embed?: string;
        updated?: string;
        contentType?: string;
        longitude?: number;
      }
    | {
        coverContentUrl?: string;
        created?: string;
        author?: {
          powered?: number;
          newcoinAccTx?: string;
          newcoinPoolId?: string;
          aspectRatio?: number;
          instagram?: string;
          newcoinActivePublicKey?: string;
          newcoinPublicKey?: string;
          powering?: number;
          lastUpdated?: string;
          twitter?: string;
          newcoinOwnerPublicKey?: string;
          tiktok?: string;
          reddit?: string;
          id?: string;
          contentType?: string;
          signal?: string;
          longitude?: number;
          coverContentUrl?: string;
          created?: string;
          facebookId?: string;
          verifiedSocialIds?: string[];
          newcoinPoolTx?: string;
          license?: string;
          discord?: string;
          updated?: string;
          newcoinTicker?: string;
          youtube?: string;
          displayName?: string;
          latitude?: number;
          description?: string;
          tumblr?: string;
          medium?: string;
          soundcloud?: string;
          snapchat?: string;
          apple?: string;
          watts?: number;
          youtubeId?: string;
          newcoinPoolStake?: number;
          ethAddress?: string;
          newcoinPublisherPublicKey?: string;
          website?: string;
          spotify?: string;
          facebook?: string;
          fullName?: string;
          telegram?: string;
          pinterest?: string;
          label?: "user";
          "evm/0x1"?: string;
          contentUrl?: string;
          deleted?: boolean;
          blurHash?: string;
          consentEmail?: string;
          username?: string;
        };
        latitude?: number;
        flags?: string;
        description?: string;
        aspectRatio?: number;
        label?: "mood";
        isPrivate?: boolean;
        title?: string;
        posts?: {
          coverContentUrl?: string;
          moodId?: string;
          created?: string;
          author?: {
            powered?: number;
            newcoinAccTx?: string;
            newcoinPoolId?: string;
            aspectRatio?: number;
            instagram?: string;
            newcoinActivePublicKey?: string;
            newcoinPublicKey?: string;
            powering?: number;
            lastUpdated?: string;
            twitter?: string;
            newcoinOwnerPublicKey?: string;
            tiktok?: string;
            reddit?: string;
            id?: string;
            contentType?: string;
            signal?: string;
            longitude?: number;
            coverContentUrl?: string;
            created?: string;
            facebookId?: string;
            verifiedSocialIds?: string[];
            newcoinPoolTx?: string;
            license?: string;
            discord?: string;
            updated?: string;
            newcoinTicker?: string;
            youtube?: string;
            displayName?: string;
            latitude?: number;
            description?: string;
            tumblr?: string;
            medium?: string;
            soundcloud?: string;
            snapchat?: string;
            apple?: string;
            watts?: number;
            youtubeId?: string;
            newcoinPoolStake?: number;
            ethAddress?: string;
            newcoinPublisherPublicKey?: string;
            website?: string;
            spotify?: string;
            facebook?: string;
            fullName?: string;
            telegram?: string;
            pinterest?: string;
            label?: "user";
            "evm/0x1"?: string;
            contentUrl?: string;
            deleted?: boolean;
            blurHash?: string;
            consentEmail?: string;
            username?: string;
          };
          latitude?: number;
          moods?: {
            coverContentUrl?: string;
            created?: string;
            author?: {
              powered?: number;
              newcoinAccTx?: string;
              newcoinPoolId?: string;
              aspectRatio?: number;
              instagram?: string;
              newcoinActivePublicKey?: string;
              newcoinPublicKey?: string;
              powering?: number;
              lastUpdated?: string;
              twitter?: string;
              newcoinOwnerPublicKey?: string;
              tiktok?: string;
              reddit?: string;
              id?: string;
              contentType?: string;
              signal?: string;
              longitude?: number;
              coverContentUrl?: string;
              created?: string;
              facebookId?: string;
              verifiedSocialIds?: string[];
              newcoinPoolTx?: string;
              license?: string;
              discord?: string;
              updated?: string;
              newcoinTicker?: string;
              youtube?: string;
              displayName?: string;
              latitude?: number;
              description?: string;
              tumblr?: string;
              medium?: string;
              soundcloud?: string;
              snapchat?: string;
              apple?: string;
              watts?: number;
              youtubeId?: string;
              newcoinPoolStake?: number;
              ethAddress?: string;
              newcoinPublisherPublicKey?: string;
              website?: string;
              spotify?: string;
              facebook?: string;
              fullName?: string;
              telegram?: string;
              pinterest?: string;
              label?: "user";
              "evm/0x1"?: string;
              contentUrl?: string;
              deleted?: boolean;
              blurHash?: string;
              consentEmail?: string;
              username?: string;
            };
            latitude?: number;
            flags?: string;
            description?: string;
            aspectRatio?: number;
            label?: "mood";
            isPrivate?: boolean;
            title?: string;
            content?: string;
            stakeToAccess?: number;
            tags?: {
              _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
              id?: string;
              value?: string;
            }[];
            contentUrl?: string;
            deleted?: boolean;
            defaultView?: string;
            postsCount?: number;
            blurHash?: string;
            id?: string;
            updated?: string;
            contentType?: string;
            longitude?: number;
          }[];
          rating?: number;
          description?: string;
          aspectRatio?: number;
          label?: "post";
          title?: string;
          content?: string;
          tags?: {
            _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
            id?: string;
            value?: string;
          }[];
          license?: string;
          contentUrl?: string;
          deleted?: boolean;
          blurHash?: string;
          newcoinMintTx?: string;
          id?: string;
          embed?: string;
          updated?: string;
          contentType?: string;
          longitude?: number;
        }[];
        content?: string;
        stakeToAccess?: number;
        tags?: {
          _rel?: { displayValue?: string; score?: number; polygons?: string; source?: string; category?: string }[];
          id?: string;
          value?: string;
        }[];
        contentUrl?: string;
        deleted?: boolean;
        defaultView?: string;
        postsCount?: number;
        blurHash?: string;
        id?: string;
        updated?: string;
        contentType?: string;
        longitude?: number;
      }
  )[];
  done?: boolean;
}

/**
 * MoodCreateRequest Model
 */
export interface MoodCreateRequest {
  latitude?: number;
  description: string;
  title: string;
  longitude?: number;
  tags?: string[];
}

/**
 * MoodUpdateRequest Model
 */
export type MoodUpdateRequest = (
  | { title: string }
  | { description: string }
  | { longitude: number }
  | { latitude: number }
  | ({ title: string } & { description: string } & { longitude: number } & { latitude: number })
) & { latitude?: number; description?: string; id: string; title?: string; longitude?: number };

/**
 * EntityAttachRequest Model
 */
export interface EntityAttachRequest {
  targetId: string;
  id: string;
}

/**
 * MoodGrantAccessRequest Model
 */
export interface MoodGrantAccessRequest {
  targetId?: string;
  grantee?: { id?: string; username?: string };
  policy?: { level?: string };
}

/**
 * MoodGrantAccessResponse Model
 */
export interface MoodGrantAccessResponse {
  level?: string;
  grantor?: string;
  updated?: string;
}

/**
 * MoodListGranteesResponse Model
 */
export interface MoodListGranteesResponse {
  value?: {
    level?: string;
    grantee?: {
      powered?: number;
      newcoinAccTx?: string;
      newcoinPoolId?: string;
      aspectRatio?: number;
      instagram?: string;
      newcoinActivePublicKey?: string;
      newcoinPublicKey?: string;
      powering?: number;
      lastUpdated?: string;
      twitter?: string;
      newcoinOwnerPublicKey?: string;
      tiktok?: string;
      reddit?: string;
      id?: string;
      contentType?: string;
      signal?: string;
      longitude?: number;
      coverContentUrl?: string;
      created?: string;
      facebookId?: string;
      verifiedSocialIds?: string[];
      newcoinPoolTx?: string;
      license?: string;
      discord?: string;
      updated?: string;
      newcoinTicker?: string;
      youtube?: string;
      displayName?: string;
      latitude?: number;
      description?: string;
      tumblr?: string;
      medium?: string;
      soundcloud?: string;
      snapchat?: string;
      apple?: string;
      watts?: number;
      youtubeId?: string;
      newcoinPoolStake?: number;
      ethAddress?: string;
      newcoinPublisherPublicKey?: string;
      website?: string;
      spotify?: string;
      facebook?: string;
      fullName?: string;
      telegram?: string;
      pinterest?: string;
      label?: "user";
      "evm/0x1"?: string;
      contentUrl?: string;
      deleted?: boolean;
      blurHash?: string;
      consentEmail?: string;
      username?: string;
    };
    updated?: string;
  }[];
  done?: boolean;
}

export interface CreativeSearchResponse {
  hits?: {
    _source?: {
      image?: string;
      meta?: { date?: string; summary?: string; id?: number; blog_name?: string; tags?: string[]; short_url?: string };
      aesthetics?: object;
      content?: object;
    };
    _id?: string;
  }[];
}

export interface PaymentStripePaymentIntentCreateRequest {
  items?: { productId?: string; priceId?: string }[];
  username?: string;
}

export interface PaymentStripeWebhookRequest {
  request?: object;
  livemode?: boolean;
  data?: { object?: object };
  created?: number;
  id?: string;
  type?: string;
  api_version?: string;
  pending_webhooks?: number;
  object?: string;
}

export interface PaymentStripePaymentIntentCreateResponse {
  client_secret?: string;
}

export type InstagramVerificationRequest = object;

export interface InstagramVerificationResponse {
  isVerified?: boolean;
  success?: boolean;
}

export interface EvmVerificationRequest {
  payload?: { chain?: string; address?: string; wallet?: string; id?: string; username?: string };
  signature?: string;
}

export interface SessionTokenResponse {
  jwt?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.newgra.ph/{basePath}";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title newgraph-api-eu-prod
 * @version 2024-08-23T14:45:18Z
 * @baseUrl https://api.newgra.ph/{basePath}
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  mood = {
    /**
     * No description
     *
     * @name AccessGrantCreate
     * @request POST:/mood/access/grant
     * @secure
     */
    accessGrantCreate: (data: MoodGrantAccessRequest, params: RequestParams = {}) =>
      this.request<MoodGrantAccessResponse, ErrorResponse>({
        path: `/mood/access/grant`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood
     * @request OPTIONS:/mood/access/grant
     */
    optionsMood: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood/access/grant`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name AccessGranteesList
     * @request GET:/mood/access/grantees
     */
    accessGranteesList: (query?: { id?: string; page?: string }, params: RequestParams = {}) =>
      this.request<MoodListGranteesResponse, ErrorResponse>({
        path: `/mood/access/grantees`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood2
     * @request OPTIONS:/mood/access/grantees
     * @originalName optionsMood
     * @duplicate
     */
    optionsMood2: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood/access/grantees`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name AttachUserUpdate
     * @request PUT:/mood/attach/user
     * @secure
     */
    attachUserUpdate: (data: EntityAttachRequest, params: RequestParams = {}) =>
      this.request<MoodReadResponse, ErrorResponse>({
        path: `/mood/attach/user`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood3
     * @request OPTIONS:/mood/attach/user
     * @originalName optionsMood
     * @duplicate
     */
    optionsMood3: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood/attach/user`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name AttachmentsList
     * @request GET:/mood/attachments
     * @secure
     */
    attachmentsList: (
      query?: { page?: string; sortBy?: string; order?: string; id?: string },
      params: RequestParams = {},
    ) =>
      this.request<MoodListAttachedResponse, ErrorResponse>({
        path: `/mood/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood4
     * @request OPTIONS:/mood/attachments
     * @originalName optionsMood
     * @duplicate
     */
    optionsMood4: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood/attachments`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name RateCreate
     * @request POST:/mood/rate
     * @secure
     */
    rateCreate: (data: RatingUpdateRequest, params: RequestParams = {}) =>
      this.request<RatingUpdateResponse, ErrorResponse>({
        path: `/mood/rate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood5
     * @request OPTIONS:/mood/rate
     * @originalName optionsMood
     * @duplicate
     */
    optionsMood5: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood/rate`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name AttachPostUpdate
     * @request PUT:/mood/attach/post
     * @secure
     */
    attachPostUpdate: (data: EntityAttachRequest, params: RequestParams = {}) =>
      this.request<PostReadResponse, ErrorResponse>({
        path: `/mood/attach/post`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood6
     * @request OPTIONS:/mood/attach/post
     * @originalName optionsMood
     * @duplicate
     */
    optionsMood6: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood/attach/post`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name ListTopList
     * @request GET:/mood/list/top
     */
    listTopList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string },
      params: RequestParams = {},
    ) =>
      this.request<MoodPagedListReadPublicResponse, ErrorResponse>({
        path: `/mood/list/top`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood7
     * @request OPTIONS:/mood/list/top
     * @originalName optionsMood
     * @duplicate
     */
    optionsMood7: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood/list/top`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostsList
     * @request GET:/mood/posts
     */
    postsList: (query?: { page?: string; sortBy?: string; order?: string; id?: string }, params: RequestParams = {}) =>
      this.request<MoodListAttachedPostsResponse, ErrorResponse>({
        path: `/mood/posts`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood8
     * @request OPTIONS:/mood/posts
     * @originalName optionsMood
     * @duplicate
     */
    optionsMood8: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood/posts`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name UploadCreate
     * @request POST:/mood/upload
     * @secure
     */
    uploadCreate: (data: UploadRequestGeneric, params: RequestParams = {}) =>
      this.request<UploadResponse, ErrorResponse>({
        path: `/mood/upload`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood9
     * @request OPTIONS:/mood/upload
     * @originalName optionsMood
     * @duplicate
     */
    optionsMood9: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood/upload`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name ListPublicList
     * @request GET:/mood/list/public
     */
    listPublicList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string },
      params: RequestParams = {},
    ) =>
      this.request<MoodPagedListReadPublicResponse, ErrorResponse>({
        path: `/mood/list/public`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood10
     * @request OPTIONS:/mood/list/public
     * @originalName optionsMood
     * @duplicate
     */
    optionsMood10: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood/list/public`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name AttachMoodUpdate
     * @request PUT:/mood/attach/mood
     * @secure
     */
    attachMoodUpdate: (data: EntityAttachRequest, params: RequestParams = {}) =>
      this.request<MoodReadResponse, ErrorResponse>({
        path: `/mood/attach/mood`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood11
     * @request OPTIONS:/mood/attach/mood
     * @originalName optionsMood
     * @duplicate
     */
    optionsMood11: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood/attach/mood`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name AttachmentsPublicList
     * @request GET:/mood/attachmentsPublic
     */
    attachmentsPublicList: (
      query?: { page?: string; sortBy?: string; order?: string; id?: string },
      params: RequestParams = {},
    ) =>
      this.request<MoodListAttachedResponse, ErrorResponse>({
        path: `/mood/attachmentsPublic`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood12
     * @request OPTIONS:/mood/attachmentsPublic
     * @originalName optionsMood
     * @duplicate
     */
    optionsMood12: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood/attachmentsPublic`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name MoodList
     * @request GET:/mood
     */
    moodList: (query?: { id?: string; page?: string }, params: RequestParams = {}) =>
      this.request<MoodReadResponse, ErrorResponse>({
        path: `/mood`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MoodUpdate
     * @request PUT:/mood
     * @secure
     */
    moodUpdate: (data: MoodUpdateRequest, params: RequestParams = {}) =>
      this.request<MoodReadResponse, ErrorResponse>({
        path: `/mood`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MoodCreate
     * @request POST:/mood
     * @secure
     */
    moodCreate: (data: MoodCreateRequest, params: RequestParams = {}) =>
      this.request<MoodCreateResponse, ErrorResponse>({
        path: `/mood`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsMood13
     * @request OPTIONS:/mood
     * @originalName optionsMood
     * @duplicate
     */
    optionsMood13: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mood`,
        method: "OPTIONS",
        ...params,
      }),
  };
  infoAuth = {
    /**
     * No description
     *
     * @name InfoAuthList
     * @request GET:/info-auth
     * @secure
     */
    infoAuthList: (params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/info-auth`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsInfoAuth
     * @request OPTIONS:/info-auth
     */
    optionsInfoAuth: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/info-auth`,
        method: "OPTIONS",
        ...params,
      }),
  };
  post = {
    /**
     * No description
     *
     * @name PostList
     * @request GET:/post
     */
    postList: (query?: { id?: string }, params: RequestParams = {}) =>
      this.request<PostReadResponse, ErrorResponse>({
        path: `/post`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostUpdate
     * @request PUT:/post
     * @secure
     */
    postUpdate: (data: PostUpdateRequest, params: RequestParams = {}) =>
      this.request<PostReadResponse, ErrorResponse>({
        path: `/post`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostCreate
     * @request POST:/post
     * @secure
     */
    postCreate: (data: PostCreateRequest, params: RequestParams = {}) =>
      this.request<PostCreateResponse, ErrorResponse>({
        path: `/post`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostDelete
     * @request DELETE:/post
     * @secure
     */
    postDelete: (data: NodeRequestPost, params: RequestParams = {}) =>
      this.request<OkResponse, ErrorResponse>({
        path: `/post`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPost
     * @request OPTIONS:/post
     */
    optionsPost: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/post`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name RateCreate
     * @request POST:/post/rate
     * @secure
     */
    rateCreate: (data: RatingUpdateRequest, params: RequestParams = {}) =>
      this.request<RatingUpdateResponse, ErrorResponse>({
        path: `/post/rate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPost2
     * @request OPTIONS:/post/rate
     * @originalName optionsPost
     * @duplicate
     */
    optionsPost2: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/post/rate`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name ListSearchList
     * @request GET:/post/list/search
     * @secure
     */
    listSearchList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string; q?: string },
      params: RequestParams = {},
    ) =>
      this.request<PostPagedListReadPublicResponse, ErrorResponse>({
        path: `/post/list/search`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPost3
     * @request OPTIONS:/post/list/search
     * @originalName optionsPost
     * @duplicate
     */
    optionsPost3: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/post/list/search`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name ListTagsSearchList
     * @request GET:/post/list/tags-search
     * @secure
     */
    listTagsSearchList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string; q?: string },
      params: RequestParams = {},
    ) =>
      this.request<PostTagsSearchPublicResponse, ErrorResponse>({
        path: `/post/list/tags-search`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPost4
     * @request OPTIONS:/post/list/tags-search
     * @originalName optionsPost
     * @duplicate
     */
    optionsPost4: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/post/list/tags-search`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name ListPublicList
     * @request GET:/post/list/public
     */
    listPublicList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string },
      params: RequestParams = {},
    ) =>
      this.request<PostPagedListReadPublicResponse, ErrorResponse>({
        path: `/post/list/public`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPost5
     * @request OPTIONS:/post/list/public
     * @originalName optionsPost
     * @duplicate
     */
    optionsPost5: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/post/list/public`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name UtilsRemoteMetaProxyList
     * @request GET:/post/utils/remote-meta-proxy
     * @secure
     */
    utilsRemoteMetaProxyList: (query?: { url?: string }, params: RequestParams = {}) =>
      this.request<PostRemoteMetaProxyResponse, ErrorResponse>({
        path: `/post/utils/remote-meta-proxy`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPost6
     * @request OPTIONS:/post/utils/remote-meta-proxy
     * @originalName optionsPost
     * @duplicate
     */
    optionsPost6: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/post/utils/remote-meta-proxy`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReportCreate
     * @request POST:/post/report
     * @secure
     */
    reportCreate: (data: ReportUpdateRequest, params: RequestParams = {}) =>
      this.request<ReportUpdateResponse, ErrorResponse>({
        path: `/post/report`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPost7
     * @request OPTIONS:/post/report
     * @originalName optionsPost
     * @duplicate
     */
    optionsPost7: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/post/report`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name UploadCreate
     * @request POST:/post/upload
     * @secure
     */
    uploadCreate: (data: UploadRequestGeneric, params: RequestParams = {}) =>
      this.request<UploadResponse, ErrorResponse>({
        path: `/post/upload`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPost8
     * @request OPTIONS:/post/upload
     * @originalName optionsPost
     * @duplicate
     */
    optionsPost8: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/post/upload`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name ListTopList
     * @request GET:/post/list/top
     */
    listTopList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string },
      params: RequestParams = {},
    ) =>
      this.request<PostPagedListReadPublicResponse, ErrorResponse>({
        path: `/post/list/top`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPost9
     * @request OPTIONS:/post/list/top
     * @originalName optionsPost
     * @duplicate
     */
    optionsPost9: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/post/list/top`,
        method: "OPTIONS",
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @name UserUploadAvatarCreate
     * @request POST:/user/userUpload/avatar
     * @secure
     */
    userUploadAvatarCreate: (data: UserUploadRequest, params: RequestParams = {}) =>
      this.request<UploadResponse, ErrorResponse>({
        path: `/user/userUpload/avatar`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser
     * @request OPTIONS:/user/userUpload/avatar
     */
    optionsUser: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/userUpload/avatar`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name CurrentList
     * @request GET:/user/current
     * @secure
     */
    currentList: (params: RequestParams = {}) =>
      this.request<UserReadPrivateResponse, ErrorResponse>({
        path: `/user/current`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser2
     * @request OPTIONS:/user/current
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser2: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/current`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name MoodsList
     * @request GET:/user/moods
     * @secure
     */
    moodsList: (query?: { flags?: string; id?: string; page?: string }, params: RequestParams = {}) =>
      this.request<MoodPagedListReadPublicResponse, ErrorResponse>({
        path: `/user/moods`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser3
     * @request OPTIONS:/user/moods
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser3: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/moods`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name RatedOutUsersRequestsList
     * @request GET:/user/rated/out/users/requests
     * @secure
     */
    ratedOutUsersRequestsList: (query?: { id?: string; page?: string }, params: RequestParams = {}) =>
      this.request<PagedRatedResponseUser, ErrorResponse>({
        path: `/user/rated/out/users/requests`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser4
     * @request OPTIONS:/user/rated/out/users/requests
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser4: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/rated/out/users/requests`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name RatedInList
     * @request GET:/user/rated/in
     * @secure
     */
    ratedInList: (query?: { id?: string; page?: string }, params: RequestParams = {}) =>
      this.request<PagedRatedResponseUser, ErrorResponse>({
        path: `/user/rated/in`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser5
     * @request OPTIONS:/user/rated/in
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser5: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/rated/in`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name InviteCreate
     * @request POST:/user/invite
     * @secure
     */
    inviteCreate: (data: UserInviteRequest, params: RequestParams = {}) =>
      this.request<UserInvitationReadPublicResponse, ErrorResponse>({
        path: `/user/invite`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser6
     * @request OPTIONS:/user/invite
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser6: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/invite`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetSpecialFolderList
     * @request GET:/user/getSpecialFolder
     * @secure
     */
    getSpecialFolderList: (query?: { redirect?: string; id?: string; flag?: string }, params: RequestParams = {}) =>
      this.request<ValueResponse, ErrorResponse>({
        path: `/user/getSpecialFolder`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser7
     * @request OPTIONS:/user/getSpecialFolder
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser7: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/getSpecialFolder`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name ListSearchList
     * @request GET:/user/list/search
     */
    listSearchList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string; q?: string },
      params: RequestParams = {},
    ) =>
      this.request<UserPagedListReadPublicResponse, ErrorResponse>({
        path: `/user/list/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser8
     * @request OPTIONS:/user/list/search
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser8: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/list/search`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name InviteHashList
     * @request GET:/user/invite/hash
     */
    inviteHashList: (query?: { hash?: string }, params: RequestParams = {}) =>
      this.request<UserInvitationReadPublicResponse, ErrorResponse>({
        path: `/user/invite/hash`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser9
     * @request OPTIONS:/user/invite/hash
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser9: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/invite/hash`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name SearchexternalList
     * @request GET:/user/searchexternal
     * @secure
     */
    searchexternalList: (query?: { username?: string; id?: string }, params: RequestParams = {}) =>
      this.request<UserReadPublicResponse, ErrorResponse>({
        path: `/user/searchexternal`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser10
     * @request OPTIONS:/user/searchexternal
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser10: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/searchexternal`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name PreregisterCreate
     * @request POST:/user/preregister
     * @secure
     */
    preregisterCreate: (data: UserPreRegisterRequest, params: RequestParams = {}) =>
      this.request<UserReadPrivateResponse, ErrorResponse>({
        path: `/user/preregister`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser11
     * @request OPTIONS:/user/preregister
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser11: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/preregister`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name InvitorList
     * @request GET:/user/invitor
     * @secure
     */
    invitorList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string },
      params: RequestParams = {},
    ) =>
      this.request<UserInvitationPagedListReadPublicResponse, ErrorResponse>({
        path: `/user/invitor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser12
     * @request OPTIONS:/user/invitor
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser12: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/invitor`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name AvailabilityList
     * @request GET:/user/availability
     */
    availabilityList: (query?: { username?: string }, params: RequestParams = {}) =>
      this.request<UserAvailabilityResponse, ErrorResponse>({
        path: `/user/availability`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser13
     * @request OPTIONS:/user/availability
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser13: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/availability`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name UserList
     * @request GET:/user
     */
    userList: (query?: { username?: string; id?: string }, params: RequestParams = {}) =>
      this.request<UserReadPublicResponse, ErrorResponse>({
        path: `/user`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UserUpdate
     * @request PUT:/user
     * @secure
     */
    userUpdate: (data: UserUpdateRequest, params: RequestParams = {}) =>
      this.request<UserReadPrivateResponse, ErrorResponse>({
        path: `/user`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UserCreate
     * @request POST:/user
     * @secure
     */
    userCreate: (data: UserCreateRequest, params: RequestParams = {}) =>
      this.request<UserReadPrivateResponse, ErrorResponse>({
        path: `/user`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UserDelete
     * @request DELETE:/user
     * @secure
     */
    userDelete: (data: UserDeleteRequest, params: RequestParams = {}) =>
      this.request<OkResponse, ErrorResponse>({
        path: `/user`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser14
     * @request OPTIONS:/user
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser14: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name ClaimWattsCreate
     * @request POST:/user/claimWatts
     * @secure
     */
    claimWattsCreate: (data: WattsClaimRequest, params: RequestParams = {}) =>
      this.request<WattsClaimResponse, ErrorResponse>({
        path: `/user/claimWatts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser15
     * @request OPTIONS:/user/claimWatts
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser15: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/claimWatts`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name StakeCreate
     * @request POST:/user/stake
     * @secure
     */
    stakeCreate: (data: UserStakeRequest, params: RequestParams = {}) =>
      this.request<AnyResponse, ErrorResponse>({
        path: `/user/stake`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser16
     * @request OPTIONS:/user/stake
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser16: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/stake`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name UserRateCreate
     * @request POST:/user/userRate
     * @secure
     */
    userRateCreate: (data: RatingUpdateRequest, params: RequestParams = {}) =>
      this.request<RatingUpdateResponse, ErrorResponse>({
        path: `/user/userRate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser17
     * @request OPTIONS:/user/userRate
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser17: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/userRate`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name ActivityStreamList
     * @request GET:/user/activityStream
     * @secure
     */
    activityStreamList: (query?: { after?: string; limit?: string }, params: RequestParams = {}) =>
      this.request<AnyResponse, ErrorResponse>({
        path: `/user/activityStream`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser18
     * @request OPTIONS:/user/activityStream
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser18: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/activityStream`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name SyncContactsCreate
     * @request POST:/user/syncContacts
     * @secure
     */
    syncContactsCreate: (data: SyncContactsRequest, params: RequestParams = {}) =>
      this.request<SyncContactsResponse, ErrorResponse>({
        path: `/user/syncContacts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser19
     * @request OPTIONS:/user/syncContacts
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser19: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/syncContacts`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name ListTopList
     * @request GET:/user/list/top
     * @secure
     */
    listTopList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string },
      params: RequestParams = {},
    ) =>
      this.request<UserPagedListReadPublicResponse, ErrorResponse>({
        path: `/user/list/top`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser20
     * @request OPTIONS:/user/list/top
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser20: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/list/top`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name PrecreateList
     * @request GET:/user/precreate
     */
    precreateList: (params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/user/precreate`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser21
     * @request OPTIONS:/user/precreate
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser21: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/precreate`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name UserRateRequestCreate
     * @request POST:/user/userRate/request
     * @secure
     */
    userRateRequestCreate: (data: RatingNegativeRequest, params: RequestParams = {}) =>
      this.request<RatingUpdateResponse, ErrorResponse>({
        path: `/user/userRate/request`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser22
     * @request OPTIONS:/user/userRate/request
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser22: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/userRate/request`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name TransferCreate
     * @request POST:/user/transfer
     * @secure
     */
    transferCreate: (data: UserTransferRequest, params: RequestParams = {}) =>
      this.request<UserReadPrivateResponse, ErrorResponse>({
        path: `/user/transfer`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser23
     * @request OPTIONS:/user/transfer
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser23: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/transfer`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name RatedOutPostsList
     * @request GET:/user/rated/out/posts
     * @secure
     */
    ratedOutPostsList: (query?: { id?: string; page?: string }, params: RequestParams = {}) =>
      this.request<PagedRatedResponsePost, ErrorResponse>({
        path: `/user/rated/out/posts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser24
     * @request OPTIONS:/user/rated/out/posts
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser24: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/rated/out/posts`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name UserUploadCoverCreate
     * @request POST:/user/userUpload/cover
     * @secure
     */
    userUploadCoverCreate: (data: UserUploadRequest, params: RequestParams = {}) =>
      this.request<UploadResponse, ErrorResponse>({
        path: `/user/userUpload/cover`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser25
     * @request OPTIONS:/user/userUpload/cover
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser25: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/userUpload/cover`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name GrantsListList
     * @request GET:/user/grants/list
     * @secure
     */
    grantsListList: (query?: { done?: string; value?: string }, params: RequestParams = {}) =>
      this.request<UserGrantsResponse, ErrorResponse>({
        path: `/user/grants/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser26
     * @request OPTIONS:/user/grants/list
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser26: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/grants/list`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name InviteesList
     * @request GET:/user/invitees
     * @secure
     */
    inviteesList: (
      query?: { direction?: string; contentType?: string; page?: string; orderBy?: string },
      params: RequestParams = {},
    ) =>
      this.request<UserInvitationPagedListReadPublicResponse, ErrorResponse>({
        path: `/user/invitees`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser27
     * @request OPTIONS:/user/invitees
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser27: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/invitees`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name HistoryList
     * @request GET:/user/history
     */
    historyList: (query?: { id?: string; page?: string }, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/user/history`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser28
     * @request OPTIONS:/user/history
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser28: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/history`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name RatedOutUsersList
     * @request GET:/user/rated/out/users
     * @secure
     */
    ratedOutUsersList: (query?: { id?: string; page?: string }, params: RequestParams = {}) =>
      this.request<PagedRatedResponseUser, ErrorResponse>({
        path: `/user/rated/out/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser29
     * @request OPTIONS:/user/rated/out/users
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser29: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/rated/out/users`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name BadgeListList
     * @request GET:/user/badge/list
     */
    badgeListList: (query?: { username?: string; id?: string }, params: RequestParams = {}) =>
      this.request<UserBadgesListResponseSchema, ErrorResponse>({
        path: `/user/badge/list`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUser30
     * @request OPTIONS:/user/badge/list
     * @originalName optionsUser
     * @duplicate
     */
    optionsUser30: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/badge/list`,
        method: "OPTIONS",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @name CallbackPathList
     * @request GET:/auth/callback/{path+}
     */
    callbackPathList: (path: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/auth/callback/{path+}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsAuth
     * @request OPTIONS:/auth/callback/{path+}
     */
    optionsAuth: (path: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/callback/{path+}`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name ProviderPathList
     * @request GET:/auth/provider/{path+}
     */
    providerPathList: (path: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/auth/provider/{path+}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsAuth2
     * @request OPTIONS:/auth/provider/{path+}
     * @originalName optionsAuth
     * @duplicate
     */
    optionsAuth2: (path: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/provider/{path+}`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name InviteesList
     * @request GET:/auth/invitees
     */
    inviteesList: (params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/auth/invitees`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsAuth3
     * @request OPTIONS:/auth/invitees
     * @originalName optionsAuth
     * @duplicate
     */
    optionsAuth3: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/invitees`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name EvmGenerateTokenCreate
     * @request POST:/auth/evm/generateToken
     */
    evmGenerateTokenCreate: (data: EvmVerificationRequest, params: RequestParams = {}) =>
      this.request<SessionTokenResponse, ErrorResponse>({
        path: `/auth/evm/generateToken`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsAuth4
     * @request OPTIONS:/auth/evm/generateToken
     * @originalName optionsAuth
     * @duplicate
     */
    optionsAuth4: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/evm/generateToken`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name EstimateList
     * @request GET:/auth/estimate
     */
    estimateList: (params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/auth/estimate`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsAuth5
     * @request OPTIONS:/auth/estimate
     * @originalName optionsAuth
     * @duplicate
     */
    optionsAuth5: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/estimate`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name InstagramCreate
     * @request POST:/auth/instagram
     * @secure
     */
    instagramCreate: (data: InstagramVerificationRequest, params: RequestParams = {}) =>
      this.request<InstagramVerificationResponse, ErrorResponse>({
        path: `/auth/instagram`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsAuth6
     * @request OPTIONS:/auth/instagram
     * @originalName optionsAuth
     * @duplicate
     */
    optionsAuth6: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/instagram`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name EvmVerifyAccountCreate
     * @request POST:/auth/evm/verifyAccount
     * @secure
     */
    evmVerifyAccountCreate: (data: EvmVerificationRequest, params: RequestParams = {}) =>
      this.request<OkResponse, ErrorResponse>({
        path: `/auth/evm/verifyAccount`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsAuth7
     * @request OPTIONS:/auth/evm/verifyAccount
     * @originalName optionsAuth
     * @duplicate
     */
    optionsAuth7: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/evm/verifyAccount`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name OnesignalList
     * @request GET:/auth/onesignal
     * @secure
     */
    onesignalList: (params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/auth/onesignal`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsAuth8
     * @request OPTIONS:/auth/onesignal
     * @originalName optionsAuth
     * @duplicate
     */
    optionsAuth8: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/onesignal`,
        method: "OPTIONS",
        ...params,
      }),
  };
  payment = {
    /**
     * No description
     *
     * @name StripeWebhookCreate
     * @request POST:/payment/stripe/webhook
     */
    stripeWebhookCreate: (data: PaymentStripeWebhookRequest, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/payment/stripe/webhook`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPayment
     * @request OPTIONS:/payment/stripe/webhook
     */
    optionsPayment: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/payment/stripe/webhook`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name StripeIntentCreate
     * @request POST:/payment/stripe/intent
     * @secure
     */
    stripeIntentCreate: (data: PaymentStripePaymentIntentCreateRequest, params: RequestParams = {}) =>
      this.request<PaymentStripePaymentIntentCreateResponse, ErrorResponse>({
        path: `/payment/stripe/intent`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPayment2
     * @request OPTIONS:/payment/stripe/intent
     * @originalName optionsPayment
     * @duplicate
     */
    optionsPayment2: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/payment/stripe/intent`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name StripeSubscriptionPaymentCreate
     * @request POST:/payment/stripe/subscription/payment
     * @secure
     */
    stripeSubscriptionPaymentCreate: (params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/payment/stripe/subscription/payment`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsPayment3
     * @request OPTIONS:/payment/stripe/subscription/payment
     * @originalName optionsPayment
     * @duplicate
     */
    optionsPayment3: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/payment/stripe/subscription/payment`,
        method: "OPTIONS",
        ...params,
      }),
  };
  info = {
    /**
     * No description
     *
     * @name InfoList
     * @request GET:/info
     */
    infoList: (params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/info`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsInfo
     * @request OPTIONS:/info
     */
    optionsInfo: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/info`,
        method: "OPTIONS",
        ...params,
      }),
  };
  activation = {
    /**
     * No description
     *
     * @name AddressBadgesOracleList
     * @request GET:/activation/address-badges/oracle
     */
    addressBadgesOracleList: (params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/activation/address-badges/oracle`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsActivation
     * @request OPTIONS:/activation/address-badges/oracle
     */
    optionsActivation: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/activation/address-badges/oracle`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name EvmCheckBalanceCreate
     * @request POST:/activation/evm/checkBalance
     * @secure
     */
    evmCheckBalanceCreate: (data: ChainAddressRequest, params: RequestParams = {}) =>
      this.request<OkResponse, ErrorResponse>({
        path: `/activation/evm/checkBalance`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsActivation2
     * @request OPTIONS:/activation/evm/checkBalance
     * @originalName optionsActivation
     * @duplicate
     */
    optionsActivation2: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/activation/evm/checkBalance`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name EstimateWattsList
     * @request GET:/activation/estimate/watts
     */
    estimateWattsList: (params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/activation/estimate/watts`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsActivation3
     * @request OPTIONS:/activation/estimate/watts
     * @originalName optionsActivation
     * @duplicate
     */
    optionsActivation3: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/activation/estimate/watts`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name TokenHolderOrderOracleList
     * @request GET:/activation/token-holder-order/oracle
     */
    tokenHolderOrderOracleList: (params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/activation/token-holder-order/oracle`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsActivation4
     * @request OPTIONS:/activation/token-holder-order/oracle
     * @originalName optionsActivation
     * @duplicate
     */
    optionsActivation4: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/activation/token-holder-order/oracle`,
        method: "OPTIONS",
        ...params,
      }),
  };
  upload = {
    /**
     * No description
     *
     * @name NodeCreate
     * @request POST:/upload/node
     * @secure
     */
    nodeCreate: (data: UploadRequest, params: RequestParams = {}) =>
      this.request<UploadResponse, ErrorResponse>({
        path: `/upload/node`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsUpload
     * @request OPTIONS:/upload/node
     */
    optionsUpload: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/upload/node`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetUpload
     * @request GET:/upload/url
     */
    getUpload: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/upload/url`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetUpload2
     * @request GET:/upload/zip
     * @originalName getUpload
     * @duplicate
     */
    getUpload2: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/upload/zip`,
        method: "GET",
        ...params,
      }),
  };
  search = {
    /**
     * No description
     *
     * @name SemanticList
     * @request GET:/search/semantic
     */
    semanticList: (params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/search/semantic`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsSearch
     * @request OPTIONS:/search/semantic
     */
    optionsSearch: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/search/semantic`,
        method: "OPTIONS",
        ...params,
      }),

    /**
     * No description
     *
     * @name CreativeList
     * @request GET:/search/creative
     * @secure
     */
    creativeList: (query?: { aesthetics?: string; tags?: string; page?: string }, params: RequestParams = {}) =>
      this.request<CreativeSearchResponse, ErrorResponse>({
        path: `/search/creative`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsSearch2
     * @request OPTIONS:/search/creative
     * @originalName optionsSearch
     * @duplicate
     */
    optionsSearch2: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/search/creative`,
        method: "OPTIONS",
        ...params,
      }),
  };
  folder = {
    /**
     * No description
     *
     * @name FolderList
     * @request GET:/folder
     */
    folderList: (query?: { id?: string; page?: string }, params: RequestParams = {}) =>
      this.request<MoodReadResponse, ErrorResponse>({
        path: `/folder`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OptionsFolder
     * @request OPTIONS:/folder
     */
    optionsFolder: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/folder`,
        method: "OPTIONS",
        ...params,
      }),
  };
}
