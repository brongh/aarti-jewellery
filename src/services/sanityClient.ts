import { createClient } from "next-sanity";
import {apiVersion, dataset, projectId} from '../../sanity/env'
import { useNextSanityImage } from "next-sanity-image";

export const sanityClient = createClient({
    projectId,
    apiVersion,
    dataset,
    useCdn: false
})