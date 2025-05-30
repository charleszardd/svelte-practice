export async function fetchServices() {
    // hardcoded for immediate test
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJkY0BnbWFpbC5jb20iLCJpYXQiOjE3NDg1OTYxMTMsImV4cCI6MTc0ODU5NjcxM30.HRflJGoGAVmKKrXMqP_937tn8PKSzBubMgfst0BhHQk'; // Replace with your actual token

    const response = await fetch('http://localhost:3000/services', {
        headers:  {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch services: ${response.status}`);
    }

    return response.json();
}
