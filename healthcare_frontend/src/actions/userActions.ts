export const UPDATE_PROFILE_IMAGE = 'UPDATE_PROFILE_IMAGE';

export const updateProfileImage = ( imageUrl: string) => ({
    type: UPDATE_PROFILE_IMAGE,
    payload: imageUrl,
});