import UserProfile from "../model/userProfile";


export const getProfile = async (req, res) => {
  try {
    const { userid } = req.params; // Assuming you'll pass the userid as a URL parameter

    // Find the user profile by userid
    const userProfile = await UserProfile.findOne({ userid });

    if (!userProfile) {
      return res.status(404).json({ error: 'Profile not found.' });
    }

    return res.status(200).json(userProfile);
  } catch (error) {
    console.error('Error retrieving profile:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};

export default UserProfile;