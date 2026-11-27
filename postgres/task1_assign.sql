-- Task 1: claim tickets safely. Two blocks.
--
-- BLOCK A: ticket 10 is 'open'. Claim it for agent 1 (meera):
--   BEGIN, then lock the ticket row and read its status (SELECT ... FOR UPDATE),
--   then, because it is 'open':
--     - set the ticket's agent_id to 1 and status to 'assigned'
--     - add 1 to meera's open_count in helpdesk_agents
--     - add a row to helpdesk_ticket_log (ticket_id 10, agent_id 1, note 'assigned')
--   then COMMIT.
--
-- BLOCK B: ticket 11 is 'closed', so it must NOT be claimed:
--   BEGIN, lock the row with SELECT ... FOR UPDATE, see it is 'closed',
--   change nothing, and ROLLBACK.
--
-- TODO: write Block A below.


-- TODO: write Block B below.

