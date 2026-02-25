export async function getUserCity(): Promise<string> {
    try {
        const res = await fetch("https://ipwho.is/", {
            cache: "no-store",
        });

        const data = await res.json();
        console.log(data);
        if (data?.success && data?.city) {
            return data.city;
        }

        return "UK";
    } catch {
        return "UK";
    }
}
