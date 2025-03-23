
export const ROLE = {
    admin: 'admin',
} as const;

export type TUser = {
    name: string;
    email: string;
    password: string;
    role: TUserRoles;
    phone: string;
    aboutMe: string;
    resume: string;
    portfolioURL: string;
    githubURL?: string;
    instagramURL?: string;
    twitterURL?: string;
    linkedInURL?: string;
    facebookURL?: string;
    resetPasswordToken?: string;
    resetPasswordExpire?: Date;

};


export type TUserRoles = keyof typeof ROLE;