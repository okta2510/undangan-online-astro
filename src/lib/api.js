// src/lib/api.js

export async function fetchInvitationData(slug_name, id) {
  const response = await fetch(`https://api.example.com/invitations/${slug_name}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch invitation data');
  }
  const data = await response.json();
  return data;
}
