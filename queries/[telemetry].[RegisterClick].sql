USE [dsv_one_access]
GO
/****** Object:  StoredProcedure [statistics].[GetGlobalKPIS]    Script Date: 16-Jun-20 12:52:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- ==============================================================================
-- Author:		Ignacio Ambía
-- Create date: 18-09-2020
-- Description:	Registers action when btn is clicked
-- ==============================================================================
ALTER PROCEDURE [telemetry].[RegisterClick]
@fk_element int,
@fk_staff int
AS
BEGIN
   INSERT INTO telemetry.click (fk_element,fk_staff) VALUES (@fk_element,@fk_staff) 
END





