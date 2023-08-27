import { createClient } from "next-sanity";
import {apiVersion, dataset, projectId} from '../../sanity/env'

export const sanityClient = createClient({
    projectId,
    apiVersion,
    dataset,
    useCdn: false
})