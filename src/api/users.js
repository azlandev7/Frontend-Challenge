import axios from 'axios';

const API_URL = 'https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users';

// ✅ A list of 25 human avatar image URLs
const avatarList = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
  "https://randomuser.me/api/portraits/women/8.jpg",
  "https://randomuser.me/api/portraits/men/9.jpg",
  "https://randomuser.me/api/portraits/women/10.jpg",
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/men/13.jpg",
  "https://randomuser.me/api/portraits/women/14.jpg",
  "https://randomuser.me/api/portraits/men/15.jpg",
  "https://randomuser.me/api/portraits/women/16.jpg",
  "https://randomuser.me/api/portraits/men/17.jpg",
  "https://randomuser.me/api/portraits/women/18.jpg",
  "https://randomuser.me/api/portraits/men/19.jpg",
  "https://randomuser.me/api/portraits/women/20.jpg",
  "https://randomuser.me/api/portraits/men/21.jpg",
  "https://randomuser.me/api/portraits/women/22.jpg",
  "https://randomuser.me/api/portraits/men/23.jpg",
  "https://randomuser.me/api/portraits/women/24.jpg",
  "https://randomuser.me/api/portraits/men/25.jpg",
];

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);

    const users = response.data?.data?.users;

    if (!Array.isArray(users)) {
      throw new Error("Invalid user data format");
    }

    // ✅ Replace emoji-style avatars with real human faces
    const updatedUsers = users.slice(0, 25).map((user, index) => ({
      ...user,
      avatar: avatarList[index % avatarList.length], // Assign avatar from the list
    }));

    return updatedUsers;
  } catch (error) {
    console.error("❌ Error fetching users:", error.message);
    throw new Error("Failed to fetch users");
  }
};