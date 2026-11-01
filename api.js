(function () {
    async function request(url, options = {}) {
        const response = await fetch(url, {
            ...options,
            credentials: "same-origin",
            headers: {
                ...(options.body ? { "Content-Type": "application/json" } : {}),
                ...options.headers
            }
        });

        if (response.status === 204) {
            return null;
        }

        const payload = await response.json().catch(() => ({}));
        if (!response.ok) {
            const error = new Error(payload.error || "The request could not be completed.");
            error.status = response.status;
            throw error;
        }
        return payload;
    }

    window.apiRequest = request;
}());
