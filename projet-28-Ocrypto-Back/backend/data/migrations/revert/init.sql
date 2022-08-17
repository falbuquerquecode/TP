-- Revert ocrypto:init from pg

BEGIN;

DROP TABLE favoris, answer, question, level, lexicon, challenge, article, "user";

COMMIT;
