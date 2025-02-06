export declare type ChainAddressRequest = object;
export interface NodeRequestPost {
    id?: string;
}
export interface ValueResponse {
    value?: string;
}
export declare type AnyResponse = object;
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
            isAgent?: boolean;
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
            lastActive?: string;
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
            categories?: string[];
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
                isAgent?: boolean;
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
                lastActive?: string;
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
                categories?: string[];
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
                    isAgent?: boolean;
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
                    lastActive?: string;
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
                    categories?: string[];
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
                    _rel?: {
                        displayValue?: string;
                        score?: number;
                        polygons?: string;
                        source?: string;
                        category?: string;
                    }[];
                    id?: string;
                    value?: string;
                }[];
                licenseType?: string;
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
                _rel?: {
                    displayValue?: string;
                    score?: number;
                    polygons?: string;
                    source?: string;
                    category?: string;
                }[];
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
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
            id?: string;
            value?: string;
        }[];
        licenseType?: string;
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
    isAgent?: boolean;
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
    lastActive?: string;
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
    categories?: string[];
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
    tags?: string[];
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
    agentMode?: string;
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
    subscriptionLevel?: string;
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
    failed?: {
        claim?: {
            wattType?: string;
            claim?: number;
        };
        error?: {
            error?: string;
        };
    }[];
    updated?: {
        claim?: {
            wattType?: string;
            claim?: number;
        };
    }[];
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
    /** @pattern ^[a-z][a-z0-9\.\-_]{2,32}$ */
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
export declare type UserUpdateRequest = ({
    fullName: string;
} | {
    firstName: string;
} | {
    website: string;
} | {
    description: string;
} | {
    longitude: number;
} | {
    latitude: number;
} | {
    instagram: string;
} | {
    tiktok: string;
} | {
    youtube: string;
} | {
    twitter: string;
} | {
    spotify: string;
} | {
    pinterest: string;
} | {
    snapchat: string;
} | {
    reddit: string;
} | {
    discord: string;
} | {
    tumblr: string;
} | {
    soundcloud: string;
} | {
    apple: string;
} | {
    telegram: string;
} | {
    signal: string;
} | {
    medium: string;
} | {
    facebook: string;
} | ({
    fullName: string;
} & {
    firstName: string;
} & {
    website: string;
} & {
    description: string;
} & {
    longitude: number;
} & {
    latitude: number;
} & {
    instagram: string;
} & {
    tiktok: string;
} & {
    youtube: string;
} & {
    twitter: string;
} & {
    spotify: string;
} & {
    pinterest: string;
} & {
    snapchat: string;
} & {
    reddit: string;
} & {
    discord: string;
} & {
    tumblr: string;
} & {
    soundcloud: string;
} & {
    apple: string;
} & {
    telegram: string;
} & {
    signal: string;
} & {
    medium: string;
} & {
    facebook: string;
})) & {
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
    agentMode?: string;
    snapchat?: string;
    apple?: string;
    twitter?: string;
    isAgent?: boolean;
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
    tags?: string[];
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
        phones?: {
            label?: string;
            value?: string;
        }[];
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
        emails?: {
            label?: string;
            value?: string;
        }[];
        androidAccountType?: string;
        familyName?: string;
        middleName?: string;
        company?: string;
        androidAccountTypeRaw?: string;
    }[];
}
export declare type SyncContactsResponse = object;
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
        isAgent?: boolean;
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
        lastActive?: string;
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
        categories?: string[];
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
        isAgent?: boolean;
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
        lastActive?: string;
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
        categories?: string[];
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
    isAgent?: boolean;
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
    lastActive?: string;
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
    categories?: string[];
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
export declare type UserInviteRequest = (object | object | {
    instagram: string;
} | {
    tiktok: string;
} | {
    youtube: string;
} | {
    twitter: string;
} | {
    spotify: string;
} | {
    pinterest: string;
} | {
    snapchat: string;
} | {
    reddit: string;
} | {
    discord: string;
} | {
    tumblr: string;
} | {
    soundcloud: string;
} | {
    apple: string;
} | {
    telegram: string;
} | {
    signal: string;
} | {
    medium: string;
} | {
    facebook: string;
} | (object & object & {
    instagram: string;
} & {
    tiktok: string;
} & {
    youtube: string;
} & {
    twitter: string;
} & {
    spotify: string;
} & {
    pinterest: string;
} & {
    snapchat: string;
} & {
    reddit: string;
} & {
    discord: string;
} & {
    tumblr: string;
} & {
    soundcloud: string;
} & {
    apple: string;
} & {
    telegram: string;
} & {
    signal: string;
} & {
    medium: string;
} & {
    facebook: string;
})) & {
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
    value?: {
        level?: string;
        target?: {
            id?: string;
            label?: string;
        };
    }[];
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
        rating?: {
            created?: string;
            TxID_mintAsset?: string;
            value?: number;
            updated?: string;
        };
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
                _rel?: {
                    displayValue?: string;
                    score?: number;
                    polygons?: string;
                    source?: string;
                    category?: string;
                }[];
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
        rating?: {
            created?: string;
            TxID_mintAsset?: string;
            value?: number;
            updated?: string;
        };
        description?: string;
        aspectRatio?: number;
        label?: "post";
        title?: string;
        content?: string;
        tags?: {
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
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
        isAgent?: boolean;
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
            isAgent?: boolean;
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
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
            id?: string;
            value?: string;
        }[];
        licenseType?: string;
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
        _rel?: {
            displayValue?: string;
            score?: number;
            polygons?: string;
            source?: string;
            category?: string;
        }[];
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
        isAgent?: boolean;
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
        lastActive?: string;
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
        categories?: string[];
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
            isAgent?: boolean;
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
            lastActive?: string;
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
            categories?: string[];
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
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
            id?: string;
            value?: string;
        }[];
        licenseType?: string;
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
        _rel?: {
            displayValue?: string;
            score?: number;
            polygons?: string;
            source?: string;
            category?: string;
        }[];
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
    moodId?: string;
    created?: string;
    doMint?: string;
    description?: string;
    id?: string;
    embed?: string;
    title?: string;
    contentType?: string;
    content?: string;
}
export declare type PostUpdateRequest = ({
    title: string;
} | {
    description: string;
} | {
    longitude: number;
} | {
    latitude: number;
} | {
    license?: string;
} | {
    doMint: boolean;
} | ({
    title: string;
} & {
    description: string;
} & {
    longitude: number;
} & {
    latitude: number;
} & {
    license?: string;
} & {
    doMint: boolean;
})) & {
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
            isAgent?: boolean;
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
                isAgent?: boolean;
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
                _rel?: {
                    displayValue?: string;
                    score?: number;
                    polygons?: string;
                    source?: string;
                    category?: string;
                }[];
                id?: string;
                value?: string;
            }[];
            licenseType?: string;
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
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
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
    value?: {
        created?: string;
        tag?: string;
    }[];
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
        isAgent?: boolean;
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
        lastActive?: string;
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
        categories?: string[];
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
            isAgent?: boolean;
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
            lastActive?: string;
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
            categories?: string[];
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
                isAgent?: boolean;
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
                lastActive?: string;
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
                categories?: string[];
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
                _rel?: {
                    displayValue?: string;
                    score?: number;
                    polygons?: string;
                    source?: string;
                    category?: string;
                }[];
                id?: string;
                value?: string;
            }[];
            licenseType?: string;
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
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
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
        _rel?: {
            displayValue?: string;
            score?: number;
            polygons?: string;
            source?: string;
            category?: string;
        }[];
        id?: string;
        value?: string;
    }[];
    licenseType?: string;
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
        isAgent?: boolean;
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
        lastActive?: string;
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
        categories?: string[];
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
            isAgent?: boolean;
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
            lastActive?: string;
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
            categories?: string[];
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
                isAgent?: boolean;
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
                lastActive?: string;
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
                categories?: string[];
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
                _rel?: {
                    displayValue?: string;
                    score?: number;
                    polygons?: string;
                    source?: string;
                    category?: string;
                }[];
                id?: string;
                value?: string;
            }[];
            licenseType?: string;
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
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
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
        _rel?: {
            displayValue?: string;
            score?: number;
            polygons?: string;
            source?: string;
            category?: string;
        }[];
        id?: string;
        value?: string;
    }[];
    licenseType?: string;
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
            isAgent?: boolean;
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
            lastActive?: string;
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
            categories?: string[];
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
                isAgent?: boolean;
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
                lastActive?: string;
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
                categories?: string[];
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
                _rel?: {
                    displayValue?: string;
                    score?: number;
                    polygons?: string;
                    source?: string;
                    category?: string;
                }[];
                id?: string;
                value?: string;
            }[];
            licenseType?: string;
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
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
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
    value?: ({
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
        isAgent?: boolean;
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
        lastActive?: string;
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
        categories?: string[];
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
    } | {
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
            isAgent?: boolean;
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
            lastActive?: string;
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
            categories?: string[];
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
                isAgent?: boolean;
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
                lastActive?: string;
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
                categories?: string[];
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
                _rel?: {
                    displayValue?: string;
                    score?: number;
                    polygons?: string;
                    source?: string;
                    category?: string;
                }[];
                id?: string;
                value?: string;
            }[];
            licenseType?: string;
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
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
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
    } | {
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
            isAgent?: boolean;
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
            lastActive?: string;
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
            categories?: string[];
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
                isAgent?: boolean;
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
                lastActive?: string;
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
                categories?: string[];
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
                    isAgent?: boolean;
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
                    lastActive?: string;
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
                    categories?: string[];
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
                    _rel?: {
                        displayValue?: string;
                        score?: number;
                        polygons?: string;
                        source?: string;
                        category?: string;
                    }[];
                    id?: string;
                    value?: string;
                }[];
                licenseType?: string;
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
                _rel?: {
                    displayValue?: string;
                    score?: number;
                    polygons?: string;
                    source?: string;
                    category?: string;
                }[];
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
            _rel?: {
                displayValue?: string;
                score?: number;
                polygons?: string;
                source?: string;
                category?: string;
            }[];
            id?: string;
            value?: string;
        }[];
        licenseType?: string;
        contentUrl?: string;
        deleted?: boolean;
        defaultView?: string;
        postsCount?: number;
        blurHash?: string;
        id?: string;
        updated?: string;
        contentType?: string;
        longitude?: number;
    })[];
    done?: boolean;
}
/**
 * MoodCreateRequest Model
 */
export interface MoodCreateRequest {
    licenseType?: string;
    defaultView?: string;
    latitude?: number;
    description?: string;
    id?: string;
    isPrivate?: boolean;
    title?: string;
    longitude?: number;
    tags?: string[];
}
/**
 * MoodUpdateRequest Model
 */
export declare type MoodUpdateRequest = ({
    title: string;
} | {
    description: string;
} | {
    longitude: number;
} | {
    latitude: number;
} | ({
    title: string;
} & {
    description: string;
} & {
    longitude: number;
} & {
    latitude: number;
})) & {
    licenseType?: string;
    latitude?: number;
    description?: string;
    id: string;
    title?: string;
    longitude?: number;
};
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
    grantee?: {
        id?: string;
        username?: string;
    };
    policy?: {
        level?: string;
    };
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
            isAgent?: boolean;
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
            lastActive?: string;
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
            categories?: string[];
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
            meta?: {
                date?: string;
                summary?: string;
                id?: number;
                blog_name?: string;
                tags?: string[];
                short_url?: string;
            };
            aesthetics?: object;
            content?: object;
        };
        _id?: string;
    }[];
}
export interface PaymentStripePaymentIntentCreateRequest {
    items?: {
        productId?: string;
        priceId?: string;
    }[];
    username?: string;
}
export interface PaymentStripeWebhookRequest {
    request?: object;
    livemode?: boolean;
    data?: {
        object?: object;
    };
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
export interface StripeCheckoutSessionCreateRequest {
    priceId?: string;
}
export interface StripeCheckoutSessionCreateResponse {
    subscriptionStatus?: string;
    url?: string;
}
export declare type InstagramVerificationRequest = object;
export interface InstagramVerificationResponse {
    isVerified?: boolean;
    success?: boolean;
}
export interface EvmVerificationRequest {
    payload?: {
        chain?: string;
        address?: string;
        wallet?: string;
        id?: string;
        username?: string;
    };
    signature?: string;
}
export interface SessionTokenResponse {
    jwt?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
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
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
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
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker?;
    private abortControllers;
    private customFetch;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    private encodeQueryParam;
    private addQueryParam;
    private addArrayQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title newgraph-api-eu-prod
 * @version 2025-01-16T16:16:47Z
 * @baseUrl https://api.newgra.ph/{basePath}
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    infoAuth: {
        /**
         * No description
         *
         * @name InfoAuthList
         * @request GET:/info-auth
         * @secure
         */
        infoAuthList: (params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsInfoAuth
         * @request OPTIONS:/info-auth
         */
        optionsInfoAuth: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    mood: {
        /**
         * No description
         *
         * @name AccessGrantCreate
         * @request POST:/mood/access/grant
         * @secure
         */
        accessGrantCreate: (data: MoodGrantAccessRequest, params?: RequestParams) => Promise<HttpResponse<MoodGrantAccessResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood
         * @request OPTIONS:/mood/access/grant
         */
        optionsMood: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name AccessGranteesList
         * @request GET:/mood/access/grantees
         */
        accessGranteesList: (query?: {
            id?: string | undefined;
            page?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<MoodListGranteesResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood2
         * @request OPTIONS:/mood/access/grantees
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood2: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name AccessSubscribeCreate
         * @request POST:/mood/access/subscribe
         * @secure
         */
        accessSubscribeCreate: (data: MoodGrantAccessRequest, params?: RequestParams) => Promise<HttpResponse<MoodGrantAccessResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood3
         * @request OPTIONS:/mood/access/subscribe
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood3: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name AttachUserUpdate
         * @request PUT:/mood/attach/user
         * @secure
         */
        attachUserUpdate: (data: EntityAttachRequest, params?: RequestParams) => Promise<HttpResponse<MoodReadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood4
         * @request OPTIONS:/mood/attach/user
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood4: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name AttachmentsList
         * @request GET:/mood/attachments
         * @secure
         */
        attachmentsList: (query?: {
            page?: string | undefined;
            sortBy?: string | undefined;
            order?: string | undefined;
            id?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<MoodListAttachedResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood5
         * @request OPTIONS:/mood/attachments
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood5: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name RateCreate
         * @request POST:/mood/rate
         * @secure
         */
        rateCreate: (data: RatingUpdateRequest, params?: RequestParams) => Promise<HttpResponse<RatingUpdateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood6
         * @request OPTIONS:/mood/rate
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood6: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name AttachPostUpdate
         * @request PUT:/mood/attach/post
         * @secure
         */
        attachPostUpdate: (data: EntityAttachRequest, params?: RequestParams) => Promise<HttpResponse<PostReadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood7
         * @request OPTIONS:/mood/attach/post
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood7: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name PostsList
         * @request GET:/mood/posts
         */
        postsList: (query?: {
            page?: string | undefined;
            sortBy?: string | undefined;
            order?: string | undefined;
            id?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<MoodListAttachedPostsResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood8
         * @request OPTIONS:/mood/posts
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood8: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ListTopList
         * @request GET:/mood/list/top
         */
        listTopList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<MoodPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood9
         * @request OPTIONS:/mood/list/top
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood9: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name UploadCreate
         * @request POST:/mood/upload
         * @secure
         */
        uploadCreate: (data: UploadRequestGeneric, params?: RequestParams) => Promise<HttpResponse<UploadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood10
         * @request OPTIONS:/mood/upload
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood10: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ListSearchList
         * @request GET:/mood/list/search
         */
        listSearchList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<MoodPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood11
         * @request OPTIONS:/mood/list/search
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood11: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ListPublicList
         * @request GET:/mood/list/public
         */
        listPublicList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<MoodPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood12
         * @request OPTIONS:/mood/list/public
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood12: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name OneononeList
         * @request GET:/mood/oneonone
         * @secure
         */
        oneononeList: (query?: {
            id?: string | undefined;
            page?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<MoodListGranteesResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood13
         * @request OPTIONS:/mood/oneonone
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood13: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name AttachMoodUpdate
         * @request PUT:/mood/attach/mood
         * @secure
         */
        attachMoodUpdate: (data: EntityAttachRequest, params?: RequestParams) => Promise<HttpResponse<MoodReadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood14
         * @request OPTIONS:/mood/attach/mood
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood14: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name AttachmentsPublicList
         * @request GET:/mood/attachmentsPublic
         */
        attachmentsPublicList: (query?: {
            page?: string | undefined;
            sortBy?: string | undefined;
            order?: string | undefined;
            id?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<MoodListAttachedResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood15
         * @request OPTIONS:/mood/attachmentsPublic
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood15: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name MoodList
         * @request GET:/mood
         */
        moodList: (query?: {
            id?: string | undefined;
            page?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<MoodReadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name MoodUpdate
         * @request PUT:/mood
         * @secure
         */
        moodUpdate: (data: MoodUpdateRequest, params?: RequestParams) => Promise<HttpResponse<MoodReadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name MoodCreate
         * @request POST:/mood
         * @secure
         */
        moodCreate: (data: MoodCreateRequest, params?: RequestParams) => Promise<HttpResponse<MoodCreateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsMood16
         * @request OPTIONS:/mood
         * @originalName optionsMood
         * @duplicate
         */
        optionsMood16: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    post: {
        /**
         * No description
         *
         * @name PostList
         * @request GET:/post
         */
        postList: (query?: {
            id?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PostReadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name PostUpdate
         * @request PUT:/post
         * @secure
         */
        postUpdate: (data: PostUpdateRequest, params?: RequestParams) => Promise<HttpResponse<PostReadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name PostCreate
         * @request POST:/post
         * @secure
         */
        postCreate: (data: PostCreateRequest, params?: RequestParams) => Promise<HttpResponse<PostCreateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name PostDelete
         * @request DELETE:/post
         * @secure
         */
        postDelete: (data: NodeRequestPost, params?: RequestParams) => Promise<HttpResponse<OkResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPost
         * @request OPTIONS:/post
         */
        optionsPost: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name RateCreate
         * @request POST:/post/rate
         * @secure
         */
        rateCreate: (data: RatingUpdateRequest, params?: RequestParams) => Promise<HttpResponse<RatingUpdateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPost2
         * @request OPTIONS:/post/rate
         * @originalName optionsPost
         * @duplicate
         */
        optionsPost2: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ListSearchList
         * @request GET:/post/list/search
         * @secure
         */
        listSearchList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
            q?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PostPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPost3
         * @request OPTIONS:/post/list/search
         * @originalName optionsPost
         * @duplicate
         */
        optionsPost3: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ListTagsSearchList
         * @request GET:/post/list/tags-search
         * @secure
         */
        listTagsSearchList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
            q?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PostTagsSearchPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPost4
         * @request OPTIONS:/post/list/tags-search
         * @originalName optionsPost
         * @duplicate
         */
        optionsPost4: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ListPublicList
         * @request GET:/post/list/public
         */
        listPublicList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PostPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPost5
         * @request OPTIONS:/post/list/public
         * @originalName optionsPost
         * @duplicate
         */
        optionsPost5: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name UtilsRemoteMetaProxyList
         * @request GET:/post/utils/remote-meta-proxy
         * @secure
         */
        utilsRemoteMetaProxyList: (query?: {
            url?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PostRemoteMetaProxyResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPost6
         * @request OPTIONS:/post/utils/remote-meta-proxy
         * @originalName optionsPost
         * @duplicate
         */
        optionsPost6: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ReportCreate
         * @request POST:/post/report
         * @secure
         */
        reportCreate: (data: ReportUpdateRequest, params?: RequestParams) => Promise<HttpResponse<ReportUpdateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPost7
         * @request OPTIONS:/post/report
         * @originalName optionsPost
         * @duplicate
         */
        optionsPost7: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name UploadCreate
         * @request POST:/post/upload
         * @secure
         */
        uploadCreate: (data: UploadRequestGeneric, params?: RequestParams) => Promise<HttpResponse<UploadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPost8
         * @request OPTIONS:/post/upload
         * @originalName optionsPost
         * @duplicate
         */
        optionsPost8: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ListTopList
         * @request GET:/post/list/top
         */
        listTopList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PostPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPost9
         * @request OPTIONS:/post/list/top
         * @originalName optionsPost
         * @duplicate
         */
        optionsPost9: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    user: {
        /**
         * No description
         *
         * @name ActivityManifestList
         * @request GET:/user/activityManifest
         * @secure
         */
        activityManifestList: (query?: {
            since?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<object, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser
         * @request OPTIONS:/user/activityManifest
         */
        optionsUser: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name UserUploadAvatarCreate
         * @request POST:/user/userUpload/avatar
         * @secure
         */
        userUploadAvatarCreate: (data: UserUploadRequest, params?: RequestParams) => Promise<HttpResponse<UploadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser2
         * @request OPTIONS:/user/userUpload/avatar
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser2: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name CurrentList
         * @request GET:/user/current
         * @secure
         */
        currentList: (params?: RequestParams) => Promise<HttpResponse<UserReadPrivateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser3
         * @request OPTIONS:/user/current
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser3: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name MoodsList
         * @request GET:/user/moods
         */
        moodsList: (query?: {
            flags?: string | undefined;
            id?: string | undefined;
            page?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<MoodPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser4
         * @request OPTIONS:/user/moods
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser4: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name RatedOutUsersRequestsList
         * @request GET:/user/rated/out/users/requests
         * @secure
         */
        ratedOutUsersRequestsList: (query?: {
            id?: string | undefined;
            page?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PagedRatedResponseUser, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser5
         * @request OPTIONS:/user/rated/out/users/requests
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser5: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name RatedInList
         * @request GET:/user/rated/in
         * @secure
         */
        ratedInList: (query?: {
            id?: string | undefined;
            page?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PagedRatedResponseUser, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser6
         * @request OPTIONS:/user/rated/in
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser6: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name PreupdateList
         * @request GET:/user/preupdate
         */
        preupdateList: (params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser7
         * @request OPTIONS:/user/preupdate
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser7: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name InviteCreate
         * @request POST:/user/invite
         * @secure
         */
        inviteCreate: (data: UserInviteRequest, params?: RequestParams) => Promise<HttpResponse<UserInvitationReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser8
         * @request OPTIONS:/user/invite
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser8: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name GetSpecialFolderList
         * @request GET:/user/getSpecialFolder
         * @secure
         */
        getSpecialFolderList: (query?: {
            redirect?: string | undefined;
            id?: string | undefined;
            flag?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<ValueResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser9
         * @request OPTIONS:/user/getSpecialFolder
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser9: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ListSearchList
         * @request GET:/user/list/search
         */
        listSearchList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
            q?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<UserPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser10
         * @request OPTIONS:/user/list/search
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser10: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name InviteHashList
         * @request GET:/user/invite/hash
         */
        inviteHashList: (query?: {
            hash?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<UserInvitationReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser11
         * @request OPTIONS:/user/invite/hash
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser11: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SearchexternalList
         * @request GET:/user/searchexternal
         * @secure
         */
        searchexternalList: (query?: {
            username?: string | undefined;
            id?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<UserReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser12
         * @request OPTIONS:/user/searchexternal
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser12: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name PreregisterCreate
         * @request POST:/user/preregister
         * @secure
         */
        preregisterCreate: (data: UserPreRegisterRequest, params?: RequestParams) => Promise<HttpResponse<UserReadPrivateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser13
         * @request OPTIONS:/user/preregister
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser13: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name InvitorList
         * @request GET:/user/invitor
         * @secure
         */
        invitorList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<UserInvitationPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser14
         * @request OPTIONS:/user/invitor
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser14: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name AvailabilityList
         * @request GET:/user/availability
         */
        availabilityList: (query?: {
            username?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<UserAvailabilityResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser15
         * @request OPTIONS:/user/availability
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser15: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name UserList
         * @request GET:/user
         */
        userList: (query?: {
            username?: string | undefined;
            id?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<UserReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name UserUpdate
         * @request PUT:/user
         * @secure
         */
        userUpdate: (data: UserUpdateRequest, params?: RequestParams) => Promise<HttpResponse<UserReadPrivateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name UserCreate
         * @request POST:/user
         * @secure
         */
        userCreate: (data: UserCreateRequest, params?: RequestParams) => Promise<HttpResponse<UserReadPrivateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name UserDelete
         * @request DELETE:/user
         * @secure
         */
        userDelete: (data: UserDeleteRequest, params?: RequestParams) => Promise<HttpResponse<OkResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser16
         * @request OPTIONS:/user
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser16: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ClaimWattsCreate
         * @request POST:/user/claimWatts
         * @secure
         */
        claimWattsCreate: (data: WattsClaimRequest, params?: RequestParams) => Promise<HttpResponse<WattsClaimResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser17
         * @request OPTIONS:/user/claimWatts
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser17: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name StakeCreate
         * @request POST:/user/stake
         * @secure
         */
        stakeCreate: (data: UserStakeRequest, params?: RequestParams) => Promise<HttpResponse<object, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser18
         * @request OPTIONS:/user/stake
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser18: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name UserRateCreate
         * @request POST:/user/userRate
         * @secure
         */
        userRateCreate: (data: RatingUpdateRequest, params?: RequestParams) => Promise<HttpResponse<RatingUpdateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser19
         * @request OPTIONS:/user/userRate
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser19: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ActivityStreamList
         * @request GET:/user/activityStream
         * @secure
         */
        activityStreamList: (query?: {
            after?: string | undefined;
            limit?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<object, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser20
         * @request OPTIONS:/user/activityStream
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser20: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SyncContactsCreate
         * @request POST:/user/syncContacts
         * @secure
         */
        syncContactsCreate: (data: SyncContactsRequest, params?: RequestParams) => Promise<HttpResponse<object, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser21
         * @request OPTIONS:/user/syncContacts
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser21: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ListTopList
         * @request GET:/user/list/top
         * @secure
         */
        listTopList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<UserPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser22
         * @request OPTIONS:/user/list/top
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser22: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name PrecreateCreate
         * @request POST:/user/precreate
         */
        precreateCreate: (params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser23
         * @request OPTIONS:/user/precreate
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser23: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name UserRateRequestCreate
         * @request POST:/user/userRate/request
         * @secure
         */
        userRateRequestCreate: (data: RatingNegativeRequest, params?: RequestParams) => Promise<HttpResponse<RatingUpdateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser24
         * @request OPTIONS:/user/userRate/request
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser24: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name TransferCreate
         * @request POST:/user/transfer
         * @secure
         */
        transferCreate: (data: UserTransferRequest, params?: RequestParams) => Promise<HttpResponse<UserReadPrivateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser25
         * @request OPTIONS:/user/transfer
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser25: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name RatedOutPostsList
         * @request GET:/user/rated/out/posts
         * @secure
         */
        ratedOutPostsList: (query?: {
            id?: string | undefined;
            page?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PagedRatedResponsePost, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser26
         * @request OPTIONS:/user/rated/out/posts
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser26: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name UserUploadCoverCreate
         * @request POST:/user/userUpload/cover
         * @secure
         */
        userUploadCoverCreate: (data: UserUploadRequest, params?: RequestParams) => Promise<HttpResponse<UploadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser27
         * @request OPTIONS:/user/userUpload/cover
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser27: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name GrantsListList
         * @request GET:/user/grants/list
         * @secure
         */
        grantsListList: (query?: {
            done?: string | undefined;
            value?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<UserGrantsResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser28
         * @request OPTIONS:/user/grants/list
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser28: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name InviteesList
         * @request GET:/user/invitees
         * @secure
         */
        inviteesList: (query?: {
            direction?: string | undefined;
            contentType?: string | undefined;
            page?: string | undefined;
            orderBy?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<UserInvitationPagedListReadPublicResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser29
         * @request OPTIONS:/user/invitees
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser29: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ClaimWattsAllList
         * @request GET:/user/claimWattsAll
         */
        claimWattsAllList: (params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser30
         * @request OPTIONS:/user/claimWattsAll
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser30: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name HistoryList
         * @request GET:/user/history
         */
        historyList: (query?: {
            id?: string | undefined;
            page?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser31
         * @request OPTIONS:/user/history
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser31: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name RatedOutUsersList
         * @request GET:/user/rated/out/users
         * @secure
         */
        ratedOutUsersList: (query?: {
            id?: string | undefined;
            page?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<PagedRatedResponseUser, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser32
         * @request OPTIONS:/user/rated/out/users
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser32: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name BadgeListList
         * @request GET:/user/badge/list
         */
        badgeListList: (query?: {
            username?: string | undefined;
            id?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<UserBadgesListResponseSchema, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUser33
         * @request OPTIONS:/user/badge/list
         * @originalName optionsUser
         * @duplicate
         */
        optionsUser33: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    payment: {
        /**
         * No description
         *
         * @name StripeCheckoutSessionCreate
         * @request POST:/payment/stripe/checkoutSession
         * @secure
         */
        stripeCheckoutSessionCreate: (data: StripeCheckoutSessionCreateRequest, params?: RequestParams) => Promise<HttpResponse<StripeCheckoutSessionCreateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPayment
         * @request OPTIONS:/payment/stripe/checkoutSession
         */
        optionsPayment: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name StripeWebhookCreate
         * @request POST:/payment/stripe/webhook
         */
        stripeWebhookCreate: (data: PaymentStripeWebhookRequest, params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPayment2
         * @request OPTIONS:/payment/stripe/webhook
         * @originalName optionsPayment
         * @duplicate
         */
        optionsPayment2: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name StripeIntentCreate
         * @request POST:/payment/stripe/intent
         * @secure
         */
        stripeIntentCreate: (data: PaymentStripePaymentIntentCreateRequest, params?: RequestParams) => Promise<HttpResponse<PaymentStripePaymentIntentCreateResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPayment3
         * @request OPTIONS:/payment/stripe/intent
         * @originalName optionsPayment
         * @duplicate
         */
        optionsPayment3: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name StripeSubscriptionPaymentCreate
         * @request POST:/payment/stripe/subscription/payment
         * @secure
         */
        stripeSubscriptionPaymentCreate: (params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsPayment4
         * @request OPTIONS:/payment/stripe/subscription/payment
         * @originalName optionsPayment
         * @duplicate
         */
        optionsPayment4: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    auth: {
        /**
         * No description
         *
         * @name CallbackPathList
         * @request GET:/auth/callback/{path+}
         */
        callbackPathList: (path: string, params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsAuth
         * @request OPTIONS:/auth/callback/{path+}
         */
        optionsAuth: (path: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ProviderPathList
         * @request GET:/auth/provider/{path+}
         */
        providerPathList: (path: string, params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsAuth2
         * @request OPTIONS:/auth/provider/{path+}
         * @originalName optionsAuth
         * @duplicate
         */
        optionsAuth2: (path: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name InviteesList
         * @request GET:/auth/invitees
         */
        inviteesList: (params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsAuth3
         * @request OPTIONS:/auth/invitees
         * @originalName optionsAuth
         * @duplicate
         */
        optionsAuth3: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name EvmGenerateTokenCreate
         * @request POST:/auth/evm/generateToken
         */
        evmGenerateTokenCreate: (data: EvmVerificationRequest, params?: RequestParams) => Promise<HttpResponse<SessionTokenResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsAuth4
         * @request OPTIONS:/auth/evm/generateToken
         * @originalName optionsAuth
         * @duplicate
         */
        optionsAuth4: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name EstimateList
         * @request GET:/auth/estimate
         */
        estimateList: (params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsAuth5
         * @request OPTIONS:/auth/estimate
         * @originalName optionsAuth
         * @duplicate
         */
        optionsAuth5: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name InstagramCreate
         * @request POST:/auth/instagram
         * @secure
         */
        instagramCreate: (data: InstagramVerificationRequest, params?: RequestParams) => Promise<HttpResponse<InstagramVerificationResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsAuth6
         * @request OPTIONS:/auth/instagram
         * @originalName optionsAuth
         * @duplicate
         */
        optionsAuth6: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name EvmVerifyAccountCreate
         * @request POST:/auth/evm/verifyAccount
         * @secure
         */
        evmVerifyAccountCreate: (data: EvmVerificationRequest, params?: RequestParams) => Promise<HttpResponse<OkResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsAuth7
         * @request OPTIONS:/auth/evm/verifyAccount
         * @originalName optionsAuth
         * @duplicate
         */
        optionsAuth7: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name OnesignalList
         * @request GET:/auth/onesignal
         * @secure
         */
        onesignalList: (params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsAuth8
         * @request OPTIONS:/auth/onesignal
         * @originalName optionsAuth
         * @duplicate
         */
        optionsAuth8: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    info: {
        /**
         * No description
         *
         * @name InfoList
         * @request GET:/info
         */
        infoList: (params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsInfo
         * @request OPTIONS:/info
         */
        optionsInfo: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    activation: {
        /**
         * No description
         *
         * @name AddressBadgesOracleList
         * @request GET:/activation/address-badges/oracle
         */
        addressBadgesOracleList: (params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsActivation
         * @request OPTIONS:/activation/address-badges/oracle
         */
        optionsActivation: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name EvmCheckBalanceCreate
         * @request POST:/activation/evm/checkBalance
         * @secure
         */
        evmCheckBalanceCreate: (data: ChainAddressRequest, params?: RequestParams) => Promise<HttpResponse<OkResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsActivation2
         * @request OPTIONS:/activation/evm/checkBalance
         * @originalName optionsActivation
         * @duplicate
         */
        optionsActivation2: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name EstimateWattsList
         * @request GET:/activation/estimate/watts
         */
        estimateWattsList: (params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsActivation3
         * @request OPTIONS:/activation/estimate/watts
         * @originalName optionsActivation
         * @duplicate
         */
        optionsActivation3: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name TokenHolderOrderOracleList
         * @request GET:/activation/token-holder-order/oracle
         */
        tokenHolderOrderOracleList: (params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsActivation4
         * @request OPTIONS:/activation/token-holder-order/oracle
         * @originalName optionsActivation
         * @duplicate
         */
        optionsActivation4: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    upload: {
        /**
         * No description
         *
         * @name NodeCreate
         * @request POST:/upload/node
         * @secure
         */
        nodeCreate: (data: UploadRequest, params?: RequestParams) => Promise<HttpResponse<UploadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsUpload
         * @request OPTIONS:/upload/node
         */
        optionsUpload: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name GetUpload
         * @request GET:/upload/url
         */
        getUpload: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name GetUpload2
         * @request GET:/upload/zip
         * @originalName getUpload
         * @duplicate
         */
        getUpload2: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
    };
    search: {
        /**
         * No description
         *
         * @name SemanticList
         * @request GET:/search/semantic
         */
        semanticList: (params?: RequestParams) => Promise<HttpResponse<void, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsSearch
         * @request OPTIONS:/search/semantic
         */
        optionsSearch: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name CreativeList
         * @request GET:/search/creative
         * @secure
         */
        creativeList: (query?: {
            aesthetics?: string | undefined;
            tags?: string | undefined;
            page?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<CreativeSearchResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsSearch2
         * @request OPTIONS:/search/creative
         * @originalName optionsSearch
         * @duplicate
         */
        optionsSearch2: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    folder: {
        /**
         * No description
         *
         * @name FolderList
         * @request GET:/folder
         */
        folderList: (query?: {
            id?: string | undefined;
            page?: string | undefined;
        } | undefined, params?: RequestParams) => Promise<HttpResponse<MoodReadResponse, ErrorResponse>>;
        /**
         * No description
         *
         * @name OptionsFolder
         * @request OPTIONS:/folder
         */
        optionsFolder: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
}
export {};
