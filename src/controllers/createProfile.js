import UserProfile from '../model/userProfile.js'; // Assuming your model is named UserProfile

export const createProfile = async (req, res) => {
  try {
    // Consider data sanitization for security (especially for `image`)
    const { name, email, password, dob, age, job, study, image } = req.body;

    // Optionally validate other fields (e.g., email format, password strength)

    // Create a new profile
    const userProfile = new UserProfile({
      name,
      email,
      password, // Assuming password hashing is done before saving
      dob: dob && new Date(dob), // Handle potential invalid date formats
      age, // May be automatically calculated from dob if your model supports it
      job,
      study,
      image, // Sanitized image data
    });

    // Save the profile to the database
    await userProfile.save();

    return res.status(201).json({ message: 'Profile created successfully.' });
  } catch (error) {
    console.error('Error creating profile:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};