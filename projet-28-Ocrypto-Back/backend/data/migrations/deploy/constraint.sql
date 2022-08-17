-- Deploy ocrypto:constraint to pg

BEGIN;

ALTER TABLE "user" 
        ADD CONSTRAINT pseudo_regexp CHECK (pseudo ~ $$^\w{4,}$$),
        ADD CONSTRAINT email_regexp CHECK (email ~ $$^[A-Za-z]+[A-Za-z0-9.]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$$);
      

COMMIT;
