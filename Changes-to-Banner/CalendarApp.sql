DROP  TABLE IF EXISTS events;
CREATE TABLE events(
    id INT Identity(1,1) PRIMARY KEY CLUSTERED NOT NULL
    , userId NVARCHAR(50) NOT NULL
    , title NVARCHAR(200) NOT NULL
    , [description] NVARCHAR(1000) NULL
    , startDate date NOT NULL
    , startTime time(0) NULL
    , endDate date Null
    , endTime time(0) Null
    , INDEX idx_events_userId(userId)
)

INSERT INTO events (userId, title, [description], startDate, startTime, endDate, endTime )
VALUES ('User1234', N'Appointment', N'Appointment Details', '2020-03-31', '14:30', NULL, NULL)
, ('User1234', N'Online Conference', N'', '2020-04-01', Null, '2020-04-01', NULL)