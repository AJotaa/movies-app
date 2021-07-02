import React from "react";
import { motion } from "framer-motion";
import BaseCard from "../components/ui/BaseCard";
import BaseButton from "../components/ui/BaseButton";
import BackButton from "../components/ui/BackButton";

function SingupPage() {
  return (
    <motion.div
      id="signup-container"
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BackButton />
      <BaseCard title="Sign Up" text="Work in progress...">
        <div className="signup-controls">
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="example@mail.com" />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="not your birthday"
            />
          </div>
          <div className="controls-buttons">
            <BaseButton mode="button">Sing Up</BaseButton>
            <BaseButton mode="button">Cancel</BaseButton>
          </div>
        </div>
      </BaseCard>
    </motion.div>
  );
}

export default SingupPage;
