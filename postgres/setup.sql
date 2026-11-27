DROP TABLE IF EXISTS helpdesk_tickets;
DROP TABLE IF EXISTS helpdesk_agents;

CREATE TABLE helpdesk_agents (
  id         INTEGER PRIMARY KEY,
  name       TEXT NOT NULL,
  open_count INTEGER NOT NULL
);

CREATE TABLE helpdesk_tickets (
  id          INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  agent_id    INTEGER,
  status      TEXT NOT NULL,
  created_at  TIMESTAMP NOT NULL
);

INSERT INTO helpdesk_agents (id, name, open_count) VALUES
  (1, 'meera', 4),
  (2, 'rohan', 5);

-- 50,000 helpdesk_tickets, 5,000 customers, none assigned yet
INSERT INTO helpdesk_tickets (id, customer_id, agent_id, status, created_at)
SELECT g,
       (g * 7919) % 5000 + 1,
       NULL,
       CASE WHEN g % 10 = 0 THEN 'open' ELSE 'closed' END,
       TIMESTAMP '2025-01-01' + (g || ' minutes')::interval
FROM generate_series(1, 50000) AS g;

ANALYZE;
