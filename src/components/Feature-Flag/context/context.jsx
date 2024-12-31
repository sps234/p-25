import { createContext, useEffect, useState } from "react";
import featureFlagServiceCall  from "../data";

export const FeatureFlagContext = createContext( null );

export default function FeatureFlagGlobalState( {children } ) {

    const [loading, setLoading] = useState( false );
    const [ enabledFlags, setEnabledFlags ] = useState( {} );

    async function fetchFeatureFlags() {
        try {
            setLoading( true );
            const response = await featureFlagServiceCall();
            setEnabledFlags( response );
            // console.log( response)
            setLoading( false );
            
        } catch (error) {
            console.log(error);
            setLoading( false );
            throw new Error( 'Error in fetching feature flags' );
        }
    }

    

    useEffect( () => {
        fetchFeatureFlags();
    }, [])

    return <FeatureFlagContext.Provider value={ { loading, enabledFlags }}> { children }</FeatureFlagContext.Provider>
}