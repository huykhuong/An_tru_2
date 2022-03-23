import React from 'react'
import { motion } from "framer-motion";

const DishesDivWrapper = (props) => {
    return (
        <motion.div className="w-full h-[calc(100vh-140px)] mt-2 mb-40 flex flex-wrap gap-y-6 content-start overflow-y-scroll" key={'dishes_wrapper'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.65, ease: [0.85, 0.01, 0.4, 1] }}>
            {props.children}
        </motion.div>
    )
}

export default DishesDivWrapper
