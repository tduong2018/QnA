/****** Object:  Table [dbo].[Answers]    Script Date: 9/5/2018 1:35:12 PM ******/
Create Database QnA
go
use QnA
go

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Answers](
	[AnswerID] [int] IDENTITY(1,1) NOT NULL,
	[QuestionId] [int] NOT NULL,
	[UserId] [nvarchar](450) NULL,
	[ContentAnswer] [nvarchar](2000) NULL,
	[img] [image] NULL,
	[CreateTime] [datetime] NULL,
	[Delete] [nvarchar](5) NULL,
 CONSTRAINT [PK__Answers__D4825024DB6BDCFA] PRIMARY KEY CLUSTERED 
(
	[AnswerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Questions]    Script Date: 9/5/2018 1:35:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Questions](
	[QuestionId] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NULL,
	[ContentQuestion] [nvarchar](2000) NOT NULL,
	[UserId] [nvarchar](450) NOT NULL,
	[TopicID] [int] NULL,
	[img] [image] NULL,
	[CreateDate] [datetime] NULL,
	[Delete] [nvarchar](5) NULL,
 CONSTRAINT [PK__Question__0DC06FAC56B93AA8] PRIMARY KEY CLUSTERED 
(
	[QuestionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Roles]    Script Date: 9/5/2018 1:35:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[Id] [nvarchar](450) NOT NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
	[Name] [nvarchar](256) NULL,
	[NormalizedName] [nvarchar](256) NULL,
	[Discriminator] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Topic]    Script Date: 9/5/2018 1:35:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Topic](
	[TopicID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](200) NULL,
	[Detail] [nvarchar](1000) NULL,
PRIMARY KEY CLUSTERED 
(
	[TopicID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UserRoles]    Script Date: 9/5/2018 1:35:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRoles](
	[UserId] [nvarchar](450) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users]    Script Date: 9/5/2018 1:35:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [nvarchar](450) NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
	[Email] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[FacebookId] [bigint] NULL,
	[FirstName] [nvarchar](max) NULL,
	[LastName] [nvarchar](max) NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[LockoutEnd] [datetimeoffset](7) NULL,
	[NormalizedEmail] [nvarchar](256) NULL,
	[NormalizedUserName] [nvarchar](256) NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[PictureUrl] [nvarchar](max) NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[UserName] [nvarchar](256) NULL,
 CONSTRAINT [PK_AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO


--insert data
SET IDENTITY_INSERT [dbo].[Answers] ON 

INSERT [dbo].[Answers] ([AnswerID], [QuestionId], [UserId], [ContentAnswer], [img], [CreateTime], [Delete]) VALUES (1, 3, N'3212aa6f-791b-428c-a4bc-3f36fb08b911', N'Chào bạn, thiết nghĩ khi bạn bắt đầu học C# nếu bạn có thể đọc được tiếng anh 
	thì có thể tìm các cuốn sách kinh điển của C# từ các tác giả nổi tiếng để học như các cuốn The C# Player’s Guide, 
	C# 6.0 and the .NET 4.6 Framework,...Hoặc nếu bạn không đọc quen thì có thể đọc các cuốn Các giải pháp lập trình C# 
	của tác giả Nguyễn Ngọc Bình Phương, Thái Thanh Phong. Sách dùng kèm đĩa.... Còn không thì làm theo video trên mạng rất nhiều. Thân ái', 0x, CAST(N'2017-04-09 23:55:00.000' AS DateTime), N'True')
INSERT [dbo].[Answers] ([AnswerID], [QuestionId], [UserId], [ContentAnswer], [img], [CreateTime], [Delete]) VALUES (2, 10, N'5fa64e6b-c2f6-41cf-9b30-04b0e1bb1c27', N'Tự học đi, mình cũng tự vọc nó nè', 0x, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'True')
INSERT [dbo].[Answers] ([AnswerID], [QuestionId], [UserId], [ContentAnswer], [img], [CreateTime], [Delete]) VALUES (3, 10, N'6f37a379-e3b0-4890-9fa4-423a3a9c1889', N'vấn đề muôn thuở. Nên nếu hk có ai dẫn dắt thì rất sợ gặp phải vấn đề này', 0x, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'True')
INSERT [dbo].[Answers] ([AnswerID], [QuestionId], [UserId], [ContentAnswer], [img], [CreateTime], [Delete]) VALUES (4, 3, N'74d2c91b-2bdf-4f5b-b9c6-d6a2bd2fd1fd', N'cài đặt driver, tìm kiếm driver đỏ con mắt, không phải là chuyện chơi, chuyện con nít.
		cụ thể cài đặt driver nào, dựa trên các file nào', 0x, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'True')
INSERT [dbo].[Answers] ([AnswerID], [QuestionId], [UserId], [ContentAnswer], [img], [CreateTime], [Delete]) VALUES (5, 4, N'74d2c91b-2bdf-4f5b-b9c6-d6a2bd2fd1fd', N' phải có windows 8+ trở lên mới có thể làm win mobile development được', 0x, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'True')
INSERT [dbo].[Answers] ([AnswerID], [QuestionId], [UserId], [ContentAnswer], [img], [CreateTime], [Delete]) VALUES (6, 4, N'74d2c91b-2bdf-4f5b-b9c6-d6a2bd2fd1fd', N'Tại sao win 7 lại không được ạ ????', 0x, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'True')
INSERT [dbo].[Answers] ([AnswerID], [QuestionId], [UserId], [ContentAnswer], [img], [CreateTime], [Delete]) VALUES (7, 4, N'74d2c91b-2bdf-4f5b-b9c6-d6a2bd2fd1fd', N'Nếu để học thì Win7 32bit vẫn code tốt nha bạn.', 0x, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'True')
INSERT [dbo].[Answers] ([AnswerID], [QuestionId], [UserId], [ContentAnswer], [img], [CreateTime], [Delete]) VALUES (8, 4, N'74d2c91b-2bdf-4f5b-b9c6-d6a2bd2fd1fd', N'Các bác không hiểu vấn đề rồi. Cài win 8 trở lên là nó hỗ trợ thư viện đồng bộ window phone. Win 7 vẫn cài được nhưng phát triển trên nó cần 1 số yêu cầu cài đặt thêm.', 0x, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'True')
SET IDENTITY_INSERT [dbo].[Answers] OFF
SET IDENTITY_INSERT [dbo].[Questions] ON 

INSERT [dbo].[Questions] ([QuestionId], [Title], [ContentQuestion], [UserId], [TopicID], [img], [CreateDate], [Delete]) VALUES (1, N'Nơi học C# ở đâu?', N'Chào các bạn!mình là dân Network nhưng nay đang làm tại 1 cty software, mình muốn học thêm về code C# (cụ thể là code app chứ ko fai web)
		bạn nào biết ở HCM có trung tâm nào đào tạo C# tốt ko cho mình xin địa chỉ.', N'1f5a6009-beb4-400e-81e3-11f110f6b497', 10, 0x, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'True')
INSERT [dbo].[Questions] ([QuestionId], [Title], [ContentQuestion], [UserId], [TopicID], [img], [CreateDate], [Delete]) VALUES (2, N'Open source vs source code', N'Có một dạo, người ta hô hào dùng Linux, viện lý do miễn phí và có mã nguồn mở.Mã nguồn iPhone rò rỉ liệu có đe dọa an ninh người dùng?', N'3212aa6f-791b-428c-a4bc-3f36fb08b911', 8, 0x, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'True')
INSERT [dbo].[Questions] ([QuestionId], [Title], [ContentQuestion], [UserId], [TopicID], [img], [CreateDate], [Delete]) VALUES (3, N'học sách nào để bắt đầu C#, ASP.NET', N'Chào mọi người, mình đang bắt đầu học C# mà k biết nên học sách nào đời mới mà và chi tiết không nhỉ? cho m xin tiêu đề hay tên tác giả sách với.
		học trên mạng thấy rối quá..thanks nhiều!', N'333839d8-ba83-4c76-81bf-ddb17b99d567', 1, 0x, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'True')
INSERT [dbo].[Questions] ([QuestionId], [Title], [ContentQuestion], [UserId], [TopicID], [img], [CreateDate], [Delete]) VALUES (4, N' Phần mềm cài đặt driver máy tính', N'Em có đồ án làm phần mềm cài đặt driver máy tính. các anh có tài liệu gì có thể share cho em với đc k ạ. Em cảm ơn', N'4f9b404b-e813-4734-ad95-5d4e4e3d06ab', 3, 0x, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'True')
INSERT [dbo].[Questions] ([QuestionId], [Title], [ContentQuestion], [UserId], [TopicID], [img], [CreateDate], [Delete]) VALUES (5, N' Yêu cầu ebook + share ebook lập trình', N'ai cần ebook English gì thì cứ post ở đây , chúng tôi sẽ cố gắng tìm nó cho các bạn.
		yêu cầu : tên sách, hình ảnh. chú ý : không có tên sách mà chỉ yêu cầu chung chung thì yêu cầu sẽ bị từ chối & mình chỉ tìm ebook tiếng Anh', N'5fa64e6b-c2f6-41cf-9b30-04b0e1bb1c27', 7, 0x, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'True')
INSERT [dbo].[Questions] ([QuestionId], [Title], [ContentQuestion], [UserId], [TopicID], [img], [CreateDate], [Delete]) VALUES (6, N'Source code Website bán hàng ASP.NET MVC3', N'Gừi các bạn website bán giày mình làm môn Công nghệ Dot.Net. Mình dùng ASP.NET MVC3.
		PS:Trang web còn nhiều hạn chế,mình gửi các bạn tham khảo là chính vì lúc trong quá trình làm mình cũng mất 
		khá nhiều thời gian tìm hiểu,kiếm hoài không thấy cái source nào đơn giản để tham khảo', N'6f37a379-e3b0-4890-9fa4-423a3a9c1889', 6, 0x, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'True')
INSERT [dbo].[Questions] ([QuestionId], [Title], [ContentQuestion], [UserId], [TopicID], [img], [CreateDate], [Delete]) VALUES (7, N'Lập trình winphone', N'Lúc đầu học em sử dụng microsoft visual studio 2013 for windows desktop 
	bây giờ em muốn lập trình cho winphone nhưng trong VS của em không có store app em phải làm thế nào ạ ???', N'74d2c91b-2bdf-4f5b-b9c6-d6a2bd2fd1fd', 4, 0x, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'True')
INSERT [dbo].[Questions] ([QuestionId], [Title], [ContentQuestion], [UserId], [TopicID], [img], [CreateDate], [Delete]) VALUES (8, N'We’re hiring!!! Full-stack Dev tại Bình Định', N'Bạn đa năng? Bạn là fullstack developer? 
	Bạn đang ở Bình Định hoặc các tỉnh miền trung lân cận mà không muốn làm xa quê? Chần chừ gì apply ngay TMA Solutions!', N'74d2c91b-2bdf-4f5b-b9c6-d6a2bd2fd1fd', 9, 0x, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'True')
INSERT [dbo].[Questions] ([QuestionId], [Title], [ContentQuestion], [UserId], [TopicID], [img], [CreateDate], [Delete]) VALUES (9, N'Update trong c#', N'Em muốn hỏi là làm sao để tạo một cái nút có thể check update trong c# qua link google drive
	(P/S:Em lên search google mà toàn cần phải có tài khoản ftp trong khi đó nhà lại ko có điều kiện)', N'74d2c91b-2bdf-4f5b-b9c6-d6a2bd2fd1fd', 5, 0x, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'True')
INSERT [dbo].[Questions] ([QuestionId], [Title], [ContentQuestion], [UserId], [TopicID], [img], [CreateDate], [Delete]) VALUES (10, N'Kinh nghiệm phỏng vấn', N'Chào mọi người.Mọi người ở đây có ai đã ứng tuyển Fresher .Net ở KMS chưa ạ.
	Em tính nộp đơn để vào vị trí đó.Ai đã từng phỏng vấn ở vị trí này có thể cho em chút kinh nghiệm được không ạ.
	Em có ib admin bên đấy thì họ bảo phỏng vấn chỉ hỏi nhưng thứ cơ bản nền tảng của .Net.Vậy nền tảng và cơ bản của .Net sẽ bao gồm những gì ạ.Cám ơn mọi người', N'74d2c91b-2bdf-4f5b-b9c6-d6a2bd2fd1fd', 8, 0x, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'True')
SET IDENTITY_INSERT [dbo].[Questions] OFF
SET IDENTITY_INSERT [dbo].[Topic] ON 

INSERT [dbo].[Topic] ([TopicID], [Name], [Detail]) VALUES (1, N'Nhập môn lập trình C#, ASP.NET', N'Nhập môn lập trình C#, ASP.NET là diễn đàn dành cho người mới nhập môn(hoặc những người không muốn tuân thủ chặt chẽ luật lệ tham gia) trao đổi, thảo luận về lập trình C#, lập trình ASP.NET-C#. ')
INSERT [dbo].[Topic] ([TopicID], [Name], [Detail]) VALUES (2, N'Thắc mắc lập trình C#', N'Thắc mắc lập trình C# là diễn đàn để bạn chia sẻ và thảo luận các vấn đề liên quan đến lập trình C#. Các rắc rối và sự cố gặp phải trong việc lập trình C#.')
INSERT [dbo].[Topic] ([TopicID], [Name], [Detail]) VALUES (3, N'Thắc mắc lập trình ASP.NET', N'Thắc mắc lập trình ASP.NET là diễn đàn để bạn thắc mắc, trao đổi và chia sẻ các vấn đề liên quan đến lập trình web bằng ASP.NET sử dụng ngôn ngữ C#.')
INSERT [dbo].[Topic] ([TopicID], [Name], [Detail]) VALUES (4, N'Lập trình Windows Mobile bằng C#', N'Lập trình Windows Mobile bằng C# để chia sẻ, thảo luận các vấn đề liên quan đến lập trình Windows Mobile bằng sử dụng ngôn ngữ lập trình C#.')
INSERT [dbo].[Topic] ([TopicID], [Name], [Detail]) VALUES (5, N'Tutorials và Thủ thuật lập trình C#, ASP.NET', N'Diễn đàn để bạn chia sẻ các thủ thuật, mẹo vặt, hướng dẫn bổ ích liên quan đến lập trình C#, ASP.NET.')
INSERT [dbo].[Topic] ([TopicID], [Name], [Detail]) VALUES (6, N'Dự án & Source code C#, ASP.NET', N'Dự án & Source code C#, ASP.NET là diễn đàn để bạn chia sẻ các dự án, mã nguồn do bạn xây dựng hoặc sưu tầm được về C# hoặc ASP.NET')
INSERT [dbo].[Topic] ([TopicID], [Name], [Detail]) VALUES (7, N'Công cụ, ebooks C#, ASP.NET, và Windows Mobile', N'Đây là diễn đàn chia sẻ, thảo luận và tìm kiếm những ebooks hay những website phục vụ cho việc học C#, ASP.NET và Windows Mobile.')
INSERT [dbo].[Topic] ([TopicID], [Name], [Detail]) VALUES (8, N'Kinh nghiệm CNTT', N'Kinh nghiệm CNTT để chia sẻ, trao đổi các kinh nghiệm hoặc những bài học từ kinh nghiệm sống của bạn đối với ngành nghề CNTT. Nơi bạn muốn mọi người cho mình một lời khuyên từ kinh nghiệm thực tế.')
INSERT [dbo].[Topic] ([TopicID], [Name], [Detail]) VALUES (9, N'Tuyển dụng - Việc làm CNTT', N'Tuyển dụng - Việc làm CNTT dành cho các tổ chức, công ty có đầy đủ thông tin pháp lý đăng tuyển, tìm kiếm, bình luận các vấn đề liên quan đến việc làm ngành CNTT.')
INSERT [dbo].[Topic] ([TopicID], [Name], [Detail]) VALUES (10, N'Đào tạo CNTT', N'Đào tạo CNTT để bạn trao đổi, chia sẻ kinh nghiệm liên quan đến đào tạo trong lĩnh vực CNTT. Học gì, học như thế nào và các bình luận sẽ giúp bạn lựa chọn một con đường phù hợp.')
SET IDENTITY_INSERT [dbo].[Topic] OFF
INSERT [dbo].[Users] ([Id], [AccessFailedCount], [ConcurrencyStamp], [Email], [EmailConfirmed], [FacebookId], [FirstName], [LastName], [LockoutEnabled], [LockoutEnd], [NormalizedEmail], [NormalizedUserName], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], [PictureUrl], [SecurityStamp], [TwoFactorEnabled], [UserName]) VALUES (N'1f5a6009-beb4-400e-81e3-11f110f6b497', 0, N'e7e8dfda-d5d4-42e7-99ca-28f68207e3d5', N'Duons@com', 0, NULL, N'Minh Thuy', N'Duong Gi', 1, NULL, N'DUONS@COM', N'DUONS@COM', N'AQAAAAEAACcQAAAAEOitdhJOhWTGByHcHkMOnJCsqeQKLxvSUtkNFQ0flAGju4QPLT/OkH/ynNNrEYUBbA==', NULL, 0, '../Images/avatar2.jpg', N'7d0acbac-f604-4910-97de-bd2d33ffeaa9', 0, N'Duons@com')
INSERT [dbo].[Users] ([Id], [AccessFailedCount], [ConcurrencyStamp], [Email], [EmailConfirmed], [FacebookId], [FirstName], [LastName], [LockoutEnabled], [LockoutEnd], [NormalizedEmail], [NormalizedUserName], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], [PictureUrl], [SecurityStamp], [TwoFactorEnabled], [UserName]) VALUES (N'3212aa6f-791b-428c-a4bc-3f36fb08b911', 0, N'985ea12b-5a89-4ef0-9e37-68ccb6009942', N'Duongi@MN.com', 0, NULL, N'Minh ', N'Duong', 1, NULL, N'DUONGI@MN.COM', N'DUONGI@MN.COM', N'AQAAAAEAACcQAAAAEEdTU35MDK/3nsQBOSRdfrDkEhI9mO4IQGpIJn4nxKwcyTUqWqF1HYmAqYC0jZis5w==', NULL, 0, '../Images/avatar1.jpg', N'5fd1dd4d-2783-43ec-b298-60f094b2e26d', 0, N'Duongi@MN.com')
INSERT [dbo].[Users] ([Id], [AccessFailedCount], [ConcurrencyStamp], [Email], [EmailConfirmed], [FacebookId], [FirstName], [LastName], [LockoutEnabled], [LockoutEnd], [NormalizedEmail], [NormalizedUserName], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], [PictureUrl], [SecurityStamp], [TwoFactorEnabled], [UserName]) VALUES (N'333839d8-ba83-4c76-81bf-ddb17b99d567', 0, N'863d40d3-1081-4363-8e0d-2db5756b5748', N'tai@MN.com', 0, NULL, N'Nguyễn Minh ', N'Tai', 1, NULL, N'TAI@MN.COM', N'TAI@MN.COM', N'AQAAAAEAACcQAAAAEL5mTUdRwsO4xl2HRhY5DCORnNMZRRHwq2+33q3lK8vljmFiwmh0DgR7JO7cpJFSWA==', NULL, 0, '../Images/avatar1.jpg', N'696361fc-3aca-4b39-8efb-715df309ef7a', 0, N'tai@MN.com')
INSERT [dbo].[Users] ([Id], [AccessFailedCount], [ConcurrencyStamp], [Email], [EmailConfirmed], [FacebookId], [FirstName], [LastName], [LockoutEnabled], [LockoutEnd], [NormalizedEmail], [NormalizedUserName], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], [PictureUrl], [SecurityStamp], [TwoFactorEnabled], [UserName]) VALUES (N'4f9b404b-e813-4734-ad95-5d4e4e3d06ab', 0, N'd5cf2640-7db4-45fa-b0fa-ccf2b3c62750', N'Ty67@com.vn', 0, NULL, N'Goi', N'Ha Ty', 1, NULL, N'TY67@COM.VN', N'TY67@COM.VN', N'AQAAAAEAACcQAAAAEKpjZwPulx2/JwSlMMGzwIarDyGhQyEqy0EBmpO8xVVHnRBxhgDydwNfmgidzmeGjQ==', NULL, 0, '../Images/avatar1.jpg', N'6c22aab4-57dc-4a6b-97c1-8e17bec231b4', 0, N'Ty67@com.vn')
INSERT [dbo].[Users] ([Id], [AccessFailedCount], [ConcurrencyStamp], [Email], [EmailConfirmed], [FacebookId], [FirstName], [LastName], [LockoutEnabled], [LockoutEnd], [NormalizedEmail], [NormalizedUserName], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], [PictureUrl], [SecurityStamp], [TwoFactorEnabled], [UserName]) VALUES (N'5fa64e6b-c2f6-41cf-9b30-04b0e1bb1c27', 0, N'732099c4-3a7c-4ec8-8fba-33dd8be2a1cf', N'Ds@com.vn', 0, NULL, N'Miy', N'Duo', 1, NULL, N'DS@COM.VN', N'DS@COM.VN', N'AQAAAAEAACcQAAAAEF8hrMtxzsslBcxIXYzcIMHeMKgzIWi/cWKbUInMwmueC1gNri80rf8nDKbzGiKAhg==', NULL, 0, '../Images/avatar1.jpg', N'5ee3a08a-5e9e-4f6e-94f0-e52d9d998a0c', 0, N'Ds@com.vn')
INSERT [dbo].[Users] ([Id], [AccessFailedCount], [ConcurrencyStamp], [Email], [EmailConfirmed], [FacebookId], [FirstName], [LastName], [LockoutEnabled], [LockoutEnd], [NormalizedEmail], [NormalizedUserName], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], [PictureUrl], [SecurityStamp], [TwoFactorEnabled], [UserName]) VALUES (N'6f37a379-e3b0-4890-9fa4-423a3a9c1889', 0, N'5f89b389-4941-4de8-bd71-f96788bab18b', N'Ha123@com.vn', 0, NULL, N'Long', N'Ha Suy', 1, NULL, N'HA123@COM.VN', N'HA123@COM.VN', N'AQAAAAEAACcQAAAAEIcHAcbT0hdnvPuHeBJnsVutjRNoyhCo26Ukb48lcBRfIXmS7imZKAtS3/9U1v5EMA==', NULL, 0, '../Images/avatar1.jpg', N'1f6b859e-248d-4c0b-bed7-fc4736bed7b8', 0, N'Ha123@com.vn')
INSERT [dbo].[Users] ([Id], [AccessFailedCount], [ConcurrencyStamp], [Email], [EmailConfirmed], [FacebookId], [FirstName], [LastName], [LockoutEnabled], [LockoutEnd], [NormalizedEmail], [NormalizedUserName], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], [PictureUrl], [SecurityStamp], [TwoFactorEnabled], [UserName]) VALUES (N'74d2c91b-2bdf-4f5b-b9c6-d6a2bd2fd1fd', 0, N'ef38371e-e05c-4005-8b92-c6c4922d4d3a', N'nhat@MN.com', 0, NULL, N'Nguyễn Minh ', N'Nhật', 1, NULL, N'NHAT@MN.COM', N'NHAT@MN.COM', N'AQAAAAEAACcQAAAAEHS+BpS0LLaMvPQxoZmLvMeHJfqrw/7D3BzJU193zcF2c0haJBoioGjRHZo1luJxGw==', NULL, 0, '../Images/avatar2.jpg', N'b0f2def4-4a00-4e0f-b57f-0c19ba95baea', 0, N'nhat@MN.com')
INSERT [dbo].[Users] ([Id], [AccessFailedCount], [ConcurrencyStamp], [Email], [EmailConfirmed], [FacebookId], [FirstName], [LastName], [LockoutEnabled], [LockoutEnd], [NormalizedEmail], [NormalizedUserName], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], [PictureUrl], [SecurityStamp], [TwoFactorEnabled], [UserName]) VALUES (N'9506fc4f-4ee2-4b84-8d30-7d11e692df0b', 0, N'ddab24ac-3d42-4980-9837-f11de83aec62', N'Duos@com', 0, NULL, N'Minh chuy', N'Duong Gi', 1, NULL, N'DUOS@COM', N'DUOS@COM', N'AQAAAAEAACcQAAAAEDYJoT6/75o+/hnHEhN6JYLnFVmCNm1wAwQ2xNJjdNrORjWCRDhWzCP9L5+lg/qYmA==', NULL, 0, '../Images/avatar1.jpg', N'05ae9ec9-ca65-41d1-91c1-802c8a83ba30', 0, N'Duos@com')
INSERT [dbo].[Users] ([Id], [AccessFailedCount], [ConcurrencyStamp], [Email], [EmailConfirmed], [FacebookId], [FirstName], [LastName], [LockoutEnabled], [LockoutEnd], [NormalizedEmail], [NormalizedUserName], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], [PictureUrl], [SecurityStamp], [TwoFactorEnabled], [UserName]) VALUES (N'96dccbc2-0189-4d34-a1cd-6a6524eea8f4', 0, N'db46db10-dc8a-4f45-b900-3b89006cd1e6', N'Duon@com', 0, NULL, N'Minh Hong', N'Duong', 1, NULL, N'DUON@COM', N'DUON@COM', N'AQAAAAEAACcQAAAAECEgTw60UbMFaKmwqoLo3ffoOigZyHF/0/ivPPCvDvMVIIk1jDcjM2Ynalb6UVwhLg==', NULL, 0, '../Images/avatar1.jpg', N'2de842e3-5e50-48b7-9e90-c5648eb07e11', 0, N'Duon@com')
INSERT [dbo].[Users] ([Id], [AccessFailedCount], [ConcurrencyStamp], [Email], [EmailConfirmed], [FacebookId], [FirstName], [LastName], [LockoutEnabled], [LockoutEnd], [NormalizedEmail], [NormalizedUserName], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], [PictureUrl], [SecurityStamp], [TwoFactorEnabled], [UserName]) VALUES (N'b8783826-c5cc-45e5-a4c3-438dcda9bea4', 0, N'1405ea87-3311-4e18-ad37-5fd3f7f5eefc', N'Dsasd@com.vn', 0, NULL, N'Miy', N'Duo Huynh', 1, NULL, N'DSASD@COM.VN', N'DSASD@COM.VN', N'AQAAAAEAACcQAAAAEFkqxkwmvE3Sf03eusPA2nbrvtQY4x02gg5PCFL+jxcW0aYTNveeqMTzdmLKrFRlFQ==', NULL, 0, '../Images/avatar1.jpg', N'947f5c14-005c-4ce7-b595-d38f99ded436', 0, N'Dsasd@com.vn')
INSERT [dbo].[Users] ([Id], [AccessFailedCount], [ConcurrencyStamp], [Email], [EmailConfirmed], [FacebookId], [FirstName], [LastName], [LockoutEnabled], [LockoutEnd], [NormalizedEmail], [NormalizedUserName], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], [PictureUrl], [SecurityStamp], [TwoFactorEnabled], [UserName]) VALUES (N'c5c5a58a-2b8d-4832-858f-1690fa6313a5', 0, N'e02e76bc-4029-4722-ba45-bfb8ecae1a74', N'Ds@com', 0, NULL, N'Minh chuy', N'Duo', 1, NULL, N'DS@COM', N'DS@COM', N'AQAAAAEAACcQAAAAEHMYBOSaBCdcyefj0n4zYAguQlK2ko9dtzvUWvOljAbXyML7FMYmK1wyLAwlTr15rg==', NULL, 0, '../Images/avatar2.jpg', N'cc8124d9-2af0-4199-8896-cb34cc494ccb', 0, N'Ds@com')
INSERT [dbo].[Users] ([Id], [AccessFailedCount], [ConcurrencyStamp], [Email], [EmailConfirmed], [FacebookId], [FirstName], [LastName], [LockoutEnabled], [LockoutEnd], [NormalizedEmail], [NormalizedUserName], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], [PictureUrl], [SecurityStamp], [TwoFactorEnabled], [UserName]) VALUES (N'f0189382-62bd-442e-ab67-cea392cd0e68', 0, N'116ca6ec-e582-451f-8599-b918c46e8694', N'Dasuy123@com.vn', 0, NULL, N'Miy', N'Duo Suy', 1, NULL, N'DASUY123@COM.VN', N'DASUY123@COM.VN', N'AQAAAAEAACcQAAAAEJ2+/RLmFeArF9eVcfGELKYSj6H9e0mIsHPn21t6cnLYSfzaq4Trv6qw97hvuHtfAA==', NULL, 0, '../Images/avatar2.jpg', N'811d7cee-b948-4c53-8da0-d84bb5317953', 0, N'Dasuy123@com.vn')

--insert table roles UserRoles
INSERT INTO [dbo].[UserRoles](UserId,RoleId) VALUES ('1f5a6009-beb4-400e-81e3-11f110f6b497', '1f5a6009-beb4-400e-81e3-11f110f6b497');

--insert table roles
INSERT INTO [dbo].[Roles] (Id,Name) VALUES ('1f5a6009-beb4-400e-81e3-11f110f6b497', 'Admin');
INSERT INTO [dbo].[Roles] (Id,Name) VALUES ('QW5zd2Vy', 'Answer');
INSERT INTO [dbo].[Roles] (Id,Name) VALUES ('UXVlc3Rpb25lcg==', 'Questioner');

--alater table
ALTER TABLE [dbo].[Answers]  WITH CHECK ADD  CONSTRAINT [fk_Answer2] FOREIGN KEY([QuestionId])
REFERENCES [dbo].[Questions] ([QuestionId])
GO
ALTER TABLE [dbo].[Answers] CHECK CONSTRAINT [fk_Answer2]
GO
ALTER TABLE [dbo].[Answers]  WITH CHECK ADD  CONSTRAINT [FK_Answers_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Answers] CHECK CONSTRAINT [FK_Answers_Users]
GO
ALTER TABLE [dbo].[Questions]  WITH CHECK ADD  CONSTRAINT [FK_Questions_Topic] FOREIGN KEY([TopicID])
REFERENCES [dbo].[Topic] ([TopicID])
GO
ALTER TABLE [dbo].[Questions] CHECK CONSTRAINT [FK_Questions_Topic]
GO
ALTER TABLE [dbo].[Questions]  WITH CHECK ADD  CONSTRAINT [FK_Questions_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Questions] CHECK CONSTRAINT [FK_Questions_Users]
GO
ALTER TABLE [dbo].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId]
GO
