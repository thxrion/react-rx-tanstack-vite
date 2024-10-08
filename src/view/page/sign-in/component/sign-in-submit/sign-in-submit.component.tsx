import React from "react";

interface ISignInSubmitComponentProps {
    loading: boolean;
    onClick(): void;
}

export function SignInSubmitComponent({ loading, onClick }: ISignInSubmitComponentProps): JSX.Element {
    return (
        <button
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={loading}
            onClick={onClick}
        >
            {loading ? "Loading..." : "Log in"}
        </button>
    );
}
