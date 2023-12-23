
const RECLAIM_API_URL = "https://api.app.reclaim.ai";
const RECLAIM_ACCESS_TOKEN = process?.env?.RECLAIM_ACCESS_TOKEN;
const RECLAIM_VERBOSE = process?.env?.RECLAIM_VERBOSE === "true";

/**
 * @description Configuration for the Reclaim API client.
 */
export const config = Object.freeze({
    reclaim: {
        apiUrl: RECLAIM_API_URL,
        accessToken: RECLAIM_ACCESS_TOKEN
    },
    verbose: RECLAIM_VERBOSE
});